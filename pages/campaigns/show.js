import React from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';

export default class CampaignShow extends React.Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        }
    }


    render() {
        return(
            <Layout>
                <h3>Campaign show</h3>
            </Layout>
        )
    }
}