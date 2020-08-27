import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xc38712F03E464bfB4D98FE9753cBAEA31C54132a'
);

export default instance;

