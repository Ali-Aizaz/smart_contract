import { HardhatUserConfig } from 'hardhat/config'
import '@nomiclabs/hardhat-waffle'

const config: HardhatUserConfig = {
	solidity: '0.8.19',
	networks: {
		sepolia: {
			url: process.env.ETH_NODE,
			accounts: [process.env.ACCOUNT_SECRET!],
		},
	},
}

export default config
