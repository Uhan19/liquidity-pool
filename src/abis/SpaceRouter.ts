export const SpaceRouterAbi = [
  {
    inputs: [
      {
        internalType: "contract SpaceLP",
        name: "_spaceLP",
        type: "address",
      },
      {
        internalType: "contract SpaceCoin",
        name: "_spaceCoin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ETHRefundFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientDeposit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "eth",
        type: "uint256",
      },
    ],
    name: "InsufficientETHDeposit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "spc",
        type: "uint256",
      },
    ],
    name: "InsufficientSPCDeposit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lpToken",
        type: "uint256",
      },
    ],
    name: "LpTokenBalanceExceeded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lpToken",
        type: "uint256",
      },
    ],
    name: "LpTokenTransferFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SlippageExceeded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "spc",
        type: "uint256",
      },
    ],
    name: "SpcTokenTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroLpTokenSent",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "spc",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lpToken",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "spaceCoin",
    outputs: [
      {
        internalType: "contract SpaceCoin",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "spaceLP",
    outputs: [
      {
        internalType: "contract SpaceLP",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "spcOutMin",
        type: "uint256",
      },
    ],
    name: "swapETHForSPC",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "spcIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ethOutMin",
        type: "uint256",
      },
    ],
    name: "swapSPCForETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
