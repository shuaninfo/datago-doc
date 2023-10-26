module.exports = {
    base: '/sqldevdoc/',
    head:[
        ['link',{rel:'icon', href:'/img/favicon.ico'}]
    ],
    locales:{
        '/':{
            lang:'zh-CN',
            title: 'SQLDEV 文档',
            description: 'SQLDEV 文档',
        },
        '/en/':{
            lang:'en-US',
            title: 'SQLDEV DOC',
            description: 'SQLDEV DOC',
        }
    },
    themeConfig:{
        activeHeaderLinks: false,
        sidebarDepth:0,
        locales:{
            '/':{
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
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
                    { text: 'Github', link: 'https://github.com/shuaninfo/sqldev' },
                    { text: '产品官网', link: 'https://sqldev.info/' }
                ],
                sidebar:[
                    '/',
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
                            },
                            {
                                title:'在线更新',
                                path:'/开始/在线更新'
                            },
                            {
                                title:'许可',
                                path:'/开始/许可'
                            }
                        ]
                    },
                    {
                        title:'使用',
                        children:[
                            {
                                title:'数据源',
                                path:'/使用/数据源'
                            },
                            {
                                title:'用户',
                                path:'/使用/用户'
                            },
                            {
                                title:'项目',
                                path:'/使用/项目'
                            },
                            {
                                title:'角色',
                                path:'/使用/角色'
                            },
                            {
                                title:'工作区',
                                initialOpenGroupIndex: -1,
                                children:[
                                    {
                                        title:'工作区',
                                        path:'/使用/工作区/工作区'
                                    },
                                    {
                                        title:'切换项目',
                                        path:'/使用/工作区/切换项目'
                                    },
                                    {
                                        title:'选择数据库',
                                        path:'/使用/工作区/选择数据库'
                                    },
                                    {
                                        title:'自动提示',
                                        path:'/使用/工作区/自动提示'
                                    },
                                    {
                                        title:'执行脚本/中断执行',
                                        path:'/使用/工作区/执行脚本中断执行'
                                    },
                                    {
                                        title:'执行计划',
                                        path:'/使用/工作区/执行计划'
                                    },
                                    {
                                        title:'异步查询',
                                        path:'/使用/工作区/异步查询'
                                    },
                                    {
                                        title:'异步导出',
                                        path:'/使用/工作区/异步导出'
                                    },
                                    {
                                        title:'格式化/美化脚本',
                                        path:'/使用/工作区/格式化美化脚本'
                                    },
                                    {
                                        title:'收藏代码',
                                        path:'/使用/工作区/收藏代码'
                                    },
                                    {
                                        title:'保存到本地',
                                        path:'/使用/工作区/保存到本地'
                                    },
                                    {
                                        title:'打开本地文件',
                                        path:'/使用/工作区/打开本地文件'
                                    },
                                    {
                                        title:'历史记录',
                                        path:'/使用/工作区/历史记录'
                                    },
                                    {
                                        title:'工单',
                                        path:'/使用/工作区/工单'
                                    },
                                    {
                                        title:'表右键/自动生成SQL',
                                        path:'/使用/工作区/表右键自动生成SQL'
                                    },
                                    {
                                        title:'表筛选',
                                        path:'/使用/工作区/表筛选'
                                    }
                                ]
                            }
                        ]
                    },
                    '/更新日志',
                ]
            },
            '/en/':{
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                nav: [
                    { text: 'Github', link: 'https://github.com/shuaninfo/sqldev' },
                    { text: 'Website', link: 'https://sqldev.info/en' }
                ],
                sidebar:[
                    '/en/',
                    {
                        title:'Start',
                        children:[
                            {
                                title:'Install',
                                path:'/en/Start/Install'
                            },
                            {
                                title:'Configuration',
                                path:'/en/Start/Configuration'
                            },
                            {
                                title:'Updates',
                                path:'/en/Start/Updates'
                            },
                            {
                                title:'License',
                                path:'/en/Start/License'
                            }
                        ]
                    },
                    {
                        title:'Usage',
                        children:[
                            {
                                title:'Data Source',
                                path:'/en/Usage/DataSource'
                            },
                            {
                                title:'Users',
                                path:'/en/Usage/Users'
                            },
                            {
                                title:'Projects',
                                path:'/en/Usage/Projects'
                            },
                            {
                                title:'Roles',
                                path:'/en/Usage/Roles'
                            },
                            {
                                title:'Workspace',
                                initialOpenGroupIndex: -1,
                                children:[
                                    {
                                        title:'Workspace',
                                        path:'/en/Usage/Workspace/Workspace'
                                    },
                                    {
                                        title:'Switching Projects',
                                        path:'/en/Usage/Workspace/SwitchingProjects'
                                    },
                                    {
                                        title:'Use Database',
                                        path:'/en/Usage/Workspace/UseDatabase'
                                    },
                                    {
                                        title:'Auto Prompt',
                                        path:'/en/Usage/Workspace/AutoPrompt'
                                    },
                                    {
                                        title:'Execute/Interrupt Script',
                                        path:'/en/Usage/Workspace/ExecuteInterruptScript'
                                    },
                                    {
                                        title:'Execution Plan',
                                        path:'/en/Usage/Workspace/ExecutionPlan'
                                    },
                                    {
                                        title:'Asynchronous Query',
                                        path:'/en/Usage/Workspace/AsyncQuery'
                                    },
                                    {
                                        title:'Asynchronous Export',
                                        path:'/en/Usage/Workspace/AsyncExport'
                                    },
                                    {
                                        title:'Formatting/Beautifying Scripts',
                                        path:'/en/Usage/Workspace/FormattingScripts'
                                    },
                                    {
                                        title:'Favorite Code',
                                        path:'/en/Usage/Workspace/FavoriteCode'
                                    },
                                    {
                                        title:'Save To Local',
                                        path:'/en/Usage/Workspace/SaveToLocal'
                                    },
                                    {
                                        title:'Open Files',
                                        path:'/en/Usage/Workspace/OpenFiles'
                                    },
                                    {
                                        title:'History',
                                        path:'/en/Usage/Workspace/History'
                                    },
                                    {
                                        title:'Ticket',
                                        path:'/en/Usage/Workspace/Ticket'
                                    },
                                    {
                                        title:'Automatic SQL Generation',
                                        path:'/en/Usage/Workspace/AutomaticSQLGeneration'
                                    },
                                    {
                                        title:'Table Filter',
                                        path:'/en/Usage/Workspace/TableFilter'
                                    }
                                ]
                            }
                        ]
                    },
                    '/en/Upgrade',
                ]
            }
        }
    }
}