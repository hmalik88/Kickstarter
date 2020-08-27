import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x377bec3a4Fe943bBbEeB1d0852D01150a5149D64'
);

export default instance;

