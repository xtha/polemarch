
window.qunitTestsArray['guiPaths.group'] = {
    test:function()
    {
        let env = {};
        let pk_obj = {};

        // creates user needed for some following tests
        guiTests.createUser(env, pk_obj);

        ////////////////////////////////////////////////////////////////////////
        // Test path /group/ (list, new page, page, edit page) - group of hosts
        ///////////////////////////////////////////////////////////////////////

        guiTests.testForPathInternalLevel("/group/",{
            create:[
                {
                    is_valid:true,
                    data:  {
                        name:{value:rundomString(6)},
                        notes:{value:rundomString(6)},
                    },
                },
            ],
            update:[
                {
                    is_valid:true,
                    data: {
                        notes:{value:rundomString(6)},
                    },
                },
            ],
        }, env, pk_obj, true);


        ////////////////////////////////////////////////////////////////////
        // Test path /group/{pk}/copy/
        ///////////////////////////////////////////////////////////////////

        guiTests.copyObjectByPath("/group/{pk}/copy/", {
            data:{
                name:{value:rundomString(6)},
            },
            page:{
                delete: true,
            },
        }, env, pk_obj);


        ////////////////////////////////////////////////////////////////////
        // Test path /group/{pk}/set_owner/
        ///////////////////////////////////////////////////////////////////

        guiTests.executeAction("/group/{pk}/set_owner/", {
            data: function() { return {
                user_id: {
                    value: {id: env.user_id, text: env.user_name},
                    do_not_compare:true,
                }
            }}
        }, env, pk_obj);


        /////////////////////////////////////////////////////////////////////////
        // Test path /group/{pk}/variables/ (list, new page, page, edit page)
        /////////////////////////////////////////////////////////////////////////

        guiTests.testForPathInternalLevel("/group/{pk}/variables/",{
            create:[
                {
                    is_valid:true,
                    data:  {
                        key:{value:"ansible_user"},
                        value:{value: "ubuntu"},
                    },
                },
            ],
            update:[
                {
                    is_valid:true,
                    data: {
                        value:{value: "centos"},
                    },
                },
            ],
            page: {
                delete: true,
            }
        }, env, pk_obj);


        ////////////////////////////////////////////////////////////////
        // Test path /group/{pk}/host/ (list, new page, page, edit page)
        ////////////////////////////////////////////////////////////////

        guiTests.testForPathInternalLevel("/group/{pk}/host/",{
            create:[
                {
                    is_valid:true,
                    data:  {
                       name:{value:rundomString(6)},
                    },
                },
            ],
            update:[
                {
                    is_valid:true,
                    data: {
                        name:{value:rundomString(6)},
                    },
                },
            ],
            list: {
                hasAddButton: true,
            },
            add_child: {
                path: '/host/',
                create:{
                    is_valid:true,
                    data: {
                        name:{value:rundomString(6)},
                    },
                }
            },
        }, env, pk_obj);


        ////////////////////////////////////////////////////////////////////
        // Test path /group/{pk}/host/{host_id}/set_owner/
        ///////////////////////////////////////////////////////////////////

        guiTests.executeAction("/group/{pk}/host/{host_id}/set_owner/", {
            data: function() { return {
                user_id: {
                    value: {id: env.user_id, text: env.user_name},
                    do_not_compare:true,
                }
            }}
        }, env, pk_obj);


        ////////////////////////////////////////////////////////////////////////////////////
        // Test path /group/{pk}/host/{host_id}/variables/ (list, new page, page, edit page)
        ////////////////////////////////////////////////////////////////////////////////////

        guiTests.testForPathInternalLevel("/group/{pk}/host/{host_id}/variables/",{
            create:[
                {
                    is_valid:true,
                    data:  {
                        key:{value:"ansible_user"},
                        value:{value: "ubuntu"},
                    },
                },
            ],
            update:[
                {
                    is_valid:true,
                    data: {
                        value:{value: "centos"},
                    },
                },
            ],
            page: {
                delete: true,
            }
        }, env, pk_obj);


        // deletes remaining objects
        [
            "/group/{pk}/host/{host_id}/",
            "/host/{host_id}/",
            "/group/{pk}/",
        ].forEach((path) => {
            guiTests.deleteObjByPath(path, env, pk_obj);
        })


        /////////////////////////////////////////////////////////////////////////
        // Test path /group/ (list, new page, page, edit page) - group of groups
        ////////////////////////////////////////////////////////////////////////

        guiTests.testForPathInternalLevel("/group/",{
            create:[
                {
                    is_valid:true,
                    data:  {
                        name:{value:rundomString(6)},
                        children: {value: true},
                        notes:{value:rundomString(6)},
                    },
                },
            ],
            update:[
                {
                    is_valid:true,
                    data: {
                        notes:{value:rundomString(6)},
                    },
                },
            ]
        }, env, pk_obj, true);


        /////////////////////////////////////////////////////////////////////
        // Test path /group/{pk}/group/ (list, new page, page, edit page)
        /////////////////////////////////////////////////////////////////////

        guiTests.testForPathInternalLevel("/group/{pk}/group/",{
            create:[
                {
                    is_valid:true,
                    data:  {
                       name:{value:rundomString(6)},
                    },
                },
            ],
            update:[
                {
                    is_valid:true,
                    data: {
                        name:{value:rundomString(6)},
                    },
                },
            ],
            list: {
                hasAddButton: true,
            },
            add_child: {
                path: '/group/',
                create:{
                    is_valid:true,
                    data: {
                        name:{value:rundomString(6)},
                    },
                }
            },
        }, env, pk_obj);


        ////////////////////////////////////////////////////////////////////
        // Test path /group/{pk}/group/{group_id}/set_owner/
        ///////////////////////////////////////////////////////////////////

        guiTests.executeAction("/group/{pk}/group/{group_id}/set_owner/", {
            data: function() { return {
                user_id: {
                    value: {id: env.user_id, text: env.user_name},
                    do_not_compare:true,
                }
            }}
        }, env, pk_obj);

        //////////////////////////////////////////////////////////////////////////////////////////
        // Test path /group/{pk}/group/{group_id}/variables/ (list, new page, page, edit page)
        //////////////////////////////////////////////////////////////////////////////////////////

        guiTests.testForPathInternalLevel("/group/{pk}/group/{group_id}/variables/",{
            create:[
                {
                    is_valid:true,
                    data:  {
                        key:{value:"ansible_user"},
                        value:{value: "ubuntu"},
                    },
                },
            ],
            update:[
                {
                    is_valid:true,
                    data: {
                        value:{value: "centos"},
                    },
                },
            ],
            page: {
                delete: true,
            }
        }, env, pk_obj);


        // deletes remaining objects
        [
            "/group/{pk}/group/{group_id}/",
            "/group/{group_id}/",
            "/group/{pk}/",
            "/user/{user_id}/",
        ].forEach((path) => {
            guiTests.deleteObjByPath(path, env, pk_obj);
        })
    }
}