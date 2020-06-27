import FetchAdaptor from './FetchAdaptor'

export default class NetworkAgentFactory {
    static create(){
        return new FetchAdaptor;
    }
}
