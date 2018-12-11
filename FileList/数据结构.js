const company = {
    DATA_: [
        {
            ID: '1',//部门标识
            name: '第一总部',//部门名字
            departments: [{
                name: '第一级部门--1',//部门下在细分的项目组  名字,
                employees:[],
                departments:[{
                    name:'第二级部门',
                    employees: [ //具体某个部室的员工
                        {
                            name: "李甜甜",//名字
                            company: '1',//公司
                            department: '2',//部门
                            ID: '3',//每个人的ID
                            headImg: '4',//头像
                            phoneNum: '10086', //手机号码
                            telephoneNum: '10010',//办公电话
                            email: '7', //邮箱
                        },
                        {
                            name: "网而已",//名字
                            company: '1',//公司
                            department: '3',//部门
                            ID: '2',//每个人的ID
                            headImg: '4',//头像
                            phoneNum: '10086', //手机号码
                            telephoneNum: '10010',//办公电话
                            email: '7', //邮箱
                        }
                    ]
                }
                ]

            },
                {
                    name: '第一级部门--2',//部门下在细分的项目组  名字,
                    employees:[],
                    departments:[{
                        name:'第二级部门',
                        employees: [ //具体某个部室的员工
                            {
                                name: "田甜甜",//名字
                                company: '1',//公司
                                department: '2',//部门
                                ID: '4',//每个人的ID
                                headImg: '4',//头像
                                phoneNum: '10086', //手机号码
                                telephoneNum: '10010',//办公电话
                                email: '7', //邮箱
                            },
                            {
                                name: "张译文",//名字
                                company: '1',//公司
                                department: '2',//部门
                                ID: '5',//每个人的ID
                                headImg: '4',//头像
                                phoneNum: '10086', //手机号码
                                telephoneNum: '10010',//办公电话
                                email: '7', //邮箱
                            }
                        ]
                    }
                    ]

                },
                {
                    name: '第一级部门--3',//部门下在细分的项目组  名字,
                    employees:[],
                    departments:[{
                        name:'第二级部门',
                        employees: [ //具体某个部室的员工
                            {
                                name: "王双喜",//名字
                                company: '1',//公司
                                department: '2',//部门
                                ID: '6',//每个人的ID
                                headImg: '4',//头像
                                phoneNum: '10086', //手机号码
                                telephoneNum: '10010',//办公电话
                                email: '7', //邮箱
                            },
                            {
                                name: "刘海燕",//名字
                                company: '7',//公司
                                department: '6',//部门
                                ID: '7',//每个人的ID
                                headImg: '4',//头像
                                phoneNum: '10086', //手机号码
                                telephoneNum: '10010',//办公电话
                                email: '1', //邮箱
                            }

                        ]
                    }
                    ]

                },

            ],

        },
    ]
}

export default company;