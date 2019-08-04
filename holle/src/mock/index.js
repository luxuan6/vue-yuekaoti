import Mock from 'mockjs'

Mock.mock('/api/list',{
    "list|4-10":[
        {
            "title":"@ctitle",
            "id|+1":0,
            "image":"@cimage('200x200',@color)",
            "price|10-100":1,
            "count":1
        }
    ]
})