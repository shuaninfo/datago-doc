module.exports = {
    base: '/datagodoc/',
    head:[
        ['link',{rel:'icon', href:'./img/favicon.ico'}]
    ],
    locales:{
        '/':{
            lang:'zh-CN',
            title: 'DATAGO 文档',
            description: 'DATAGO 文档'
        }
    },
    themeConfig:{
        activeHeaderLinks: false,
        sidebarDepth:0,
        locales:{
            '/':{
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                nav: [
                    { text: 'Github', link: 'https://github.com/shuaninfo/datago' },
                    { text: '产品官网', link: 'https://datago.cc/' }
                ],
                sidebar:[
                    '/',
                    '/QuickStart',
                    {
                        title:'开始',
                        children:[
                            {
                                title:'安装',
                                path:'/开始/安装'
                            },
                            {
                                title:'配置',
                                path:'/开始/配置'
                            },
                            {
                                title:'手动更新',
                                path:'/开始/手动更新'
                            }
                        ]
                    },
                    '/更新日志'
                ]
            }
        }
    }
}