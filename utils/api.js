const url_config = require('./urlConfig.js')

export const chariApi={
    chairs(){
        return wx.request({
            url: url_config.chairs,
            // data: {},
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                return result;
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    },
    chair(id){
        console.log(url_config.chair_id + id)
        return wx.request({
            url: url_config.chair_id,
            // 还有用户id
            data: {'id':id},
            header: {'content-type':'application/json'},
            method: 'POST',
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

export const bannerApi = {
    banner(){
        return wx.request({
            url: url_config.banner,
            // data: {},
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                return result;
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    }
}

export const searchApi = {
    search(q){
        return wx.request({
            url: url_config.search,
            data: {'q':q},
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                return result;
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    }
}