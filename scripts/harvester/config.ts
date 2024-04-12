import { Hex, createPublicClient, createWalletClient, webSocket } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { arbitrum } from 'viem/chains'

export const account = privateKeyToAccount(process.env.HARVESTER_PK as Hex); 
export const publicClient = createPublicClient({ 
  chain: arbitrum,
  transport: webSocket(process.env.ARBITRUM_RPC_WEBSOCKET)
})

export const walletClient = createWalletClient({
  account,
  chain: arbitrum,
  transport: webSocket(process.env.ARBITRUM_RPC_WEBSOCKET)
});