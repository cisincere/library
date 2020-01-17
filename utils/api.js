const url_config = require('./urlConfig.js')

export const chariApi={
    chair(id){
        console.log(url_config.chair_id + id)
        return wx.request({
            url: url_config.chair_id+id,
            // data: {},
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                console.log('11231232312');
                return result;
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    }
} 