const Service = require('egg').Service;

class NewsService extends Service {
    async list(page = 1) {
        // read config
        const { serverUrl, pageSize } = this.config.news;

        // use build-in http client to GET hacker-news api
        const { data: idList } = await this.ctx.curl(`${serverUrl}/topics`, {
            data: {
                page: `"${pageSize * (page - 1)}"`,
                tab: "ask",
                limit: 5,
                mdrender: false
            },
            dataType: 'json',
        });

        // parallel GET detail
        const newsList = await Promise.all(
            Object.keys(idList.data).map(key => {
                const url = `${serverUrl}/topic/${idList.data[key].id}`;
                return this.ctx.curl(url, { 
                  data:{
                    mdrender:false
                  },
                  dataType: 'json' 
                });
            })
        );
        return newsList.map(res => res.data.data);
    }
}

module.exports = NewsService;