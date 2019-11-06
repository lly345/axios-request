export const routes=[
    {
        path:'/',
        redirect:"/login"
    },{
        path:'/login',
        autorization:false,
        component:()=>import("@/containers/login")
    },{
        path:'/registry',
        autorization:false,
        component:()=>import("@/containers/registry")
    },{
        path:'/music',
        component:()=>import("@/containers/music/index"),
        children:[
            {
                path:"/music/rank",
                meta:{
                    autorization:true,
                },
                component:()=>import("@/containers/music/rank")
            },
            {
                path:"/music/search",
                component:()=>import("@/containers/music/search")
            }, {
                path:"/music/toplist",
                component:()=>import("@/containers/music/toplist")
            },{
                path:'/music',
                redirect:'/music/rank'
            }
        ]
    }
]