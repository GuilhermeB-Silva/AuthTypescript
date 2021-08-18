// página que podem ser acessadas por pessoas nao logadas 
import { parseCookies} from 'nookies'
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";

export function withSSRGuest<P>(fn:GetServerSideProps<P>):GetServerSideProps{

    return async (ctx:GetServerSidePropsContext):Promise<GetServerSidePropsResult<P>> =>{
        
        console.log(ctx.req.cookies)    

        const cookies = parseCookies(ctx)


        if(cookies['nextauth.token']){
            return {
                redirect:{
                    destination:'/dashboard',
                    permanent:false

                }
            }
        }

        return await fn(ctx)
    }
}