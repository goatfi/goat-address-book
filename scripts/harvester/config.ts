import { createPublicClient, createWalletClient, webSocket } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { arbitrum, base } from 'viem/chains'
import type { Hex } from 'viem';
import type { ChainID } from './types';

export const account = privateKeyToAccount(process.env.HARVESTER_PK as Hex); 

const arbitrumPC = createPublicClient({ 
    chain: arbitrum,
    transport: webSocket(process.env.ARBITRUM_RPC_WEBSOCKET)
})

const arbitrumWC = createWalletClient({
    account,
    chain: arbitrum,
    transport: webSocket(process.env.ARBITRUM_RPC_WEBSOCKET)
});

const basePC = createPublicClient({ 
    chain: base,
    transport: webSocket(process.env.BASE_RPC_WEBSOCKET)
  })
  
const baseWC = createWalletClient({
    account,
    chain: base,
    transport: webSocket(process.env.BASE_RPC_WEBSOCKET)
});

export const getPublicClient = (chainID: ChainID) => {
    switch(chainID) {
        case arbitrum.id:
            return arbitrumPC;
        case base.id:
            return basePC;
    }
}

export const getWalletClient = (chainID: ChainID) => {
    switch(chainID) {
        case arbitrum.id:
            return arbitrumWC;
        case base.id:
            return baseWC;
    }
}