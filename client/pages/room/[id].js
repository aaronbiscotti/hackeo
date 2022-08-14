import React from 'react'
import Sidebar from '../../components/Game/sidebar'
const { Client } = require('@notionhq/client');

const Game = ({ data }) => {
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <Sidebar />
        </div>
    )
}

export const getStaticProps = async () => {
    const notion = new Client({
        auth: process.env.NOTION_KEY,
    });

    const data = await notion.databases.query({
        database_id_id: process.env.DATABASE_ID,
    });

    return {
        props: {
            data,
        },
    };
};

export default Game