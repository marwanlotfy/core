export default class QueryBuilder{
    static build(api,filter){
        let buildedApi = `${api}?`;
        for (const key in filter) {
            if (filter.hasOwnProperty(key)) {
                if (filter[key] != '' ) {
                    buildedApi+=`${key}=${filter[key]}&`;
                }
            }
        }
        return buildedApi;
    }
}
