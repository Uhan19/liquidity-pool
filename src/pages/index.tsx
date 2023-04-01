/* eslint-disable node/no-missing-import */
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import React, { useState, useEffect, useCallback } from "react";
import {
  useAccount,
  // usePrepareContractWrite,
  // UsePrepareContractWriteConfig,
  // useContractRead,
  // UseContractReadConfig,
  // useContractWrite,
  // UseContractWriteConfig,
  // useWaitForTransaction,
  useContract,
  UseContractConfig,
  useSigner,
} from "wagmi";
import { Account } from "../components/Account";
import { IcoAbi } from "../abis/ICO";
import { SpacecoinAbi } from "../abis/SpaceCoin";
import { SpaceRouterAbi } from "../abis/SpaceRouter";
import { SpaceLpAbi } from "../abis/SpaceLP";
import { Modal } from "../components/error-modal";

function Page() {
  const { isConnected } = useAccount();
  const { data: signer } = useSigner();
  const [errors, setErrors] = useState("");
  const [hasError, setHasError] = useState(false);
  const [spcBalanceLeft, setSpcBalanceLeft] = useState("");
  enum Addresses {
    ICO = "0xd5B7a768a5BFc8c5e64605B2B339B61833C5A8b6",
    SPACECOIN = "0xdFcb7bf63A19022c5B15284e615F7d693A8cbC57",
    SPACEROUTER = "0xAa7171d18f588DfF8A0a1b50AD2E0e882784BCc9",
    SPACELP = "0x1DA96f80f17F286e96F53ad542A0aD19cDDb2032",
  }
  const ICOContract = {
    address: Addresses.ICO,
    abi: IcoAbi,
  };

  const SpaceCoinContract = {
    address: Addresses.SPACECOIN,
    abi: SpacecoinAbi,
  };

  const SpaceRouterContract = {
    address: Addresses.SPACEROUTER,
    abi: SpaceRouterAbi,
  };

  const SpaceLpContract = {
    address: Addresses.SPACELP,
    abi: SpaceLpAbi,
  };

  const ico = useContract({
    ...ICOContract,
    signerOrProvider: signer,
  } as UseContractConfig);

  const spacecoin = useContract({
    ...SpaceCoinContract,
    signerOrProvider: signer,
  } as UseContractConfig);

  const spacerouter = useContract({
    ...SpaceRouterContract,
    signerOrProvider: signer,
  } as UseContractConfig);

  const spacelp = useContract({
    ...SpaceLpContract,
    signerOrProvider: signer,
  } as UseContractConfig);

  // const getSpcBalance = async () => {
  //   try {
  //     const balance = await spacecoin?.balanceOf(Addresses.ICO);
  //     setSpcBalanceLeft(ethers.utils.formatEther(balance));
  //   } catch (err: unknown) {
  //     if (err instanceof Error) {
  //       setErrors(err.message);
  //       setHasError(true);
  //     }
  //     console.log("err", typeof err);
  //   }
  // };

  const getSpcBalance = async () => {
    try {
      const balance = await spacecoin?.balanceOf(Addresses.ICO);
      setSpcBalanceLeft(ethers.utils.formatEther(balance));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrors(err.message);
        setHasError(true);
      }
      console.log("err", typeof err);
    }
  };

  // useEffect(() => {}, []);

  const onClickHandler = async () => {
    try {
      await ico?.advanceICOPhase();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrors(err.message);
        setHasError(true);
      }
      console.log("err", typeof err);
    }
  };
  return (
    <div className="">
      <h1>SPACECOIN 💫</h1>
      <div className="font-semibold underline">Initial Coin Offering</div>
      <div>
        SPC Left:{" "}
        {spcBalanceLeft ? (
          <span>{spcBalanceLeft}</span>
        ) : (
          <span>loading...</span>
        )}
      </div>
      <button onClick={getSpcBalance}>Check balance</button>
      <h2>CurrentPhase: {}</h2>
      <button onClick={onClickHandler}>
        Advance
        {/* {!isPhaseAdvanced && !isPhaseAdvancing && "Advance Phase"}
        {isPhaseAdvanced && "Advancing Phase"}
        {isPhaseAdvancing && "Waiting for Approval"} */}
      </button>
      {hasError && (
        <Modal
          message={errors}
          isOpen={hasError}
          onClose={() => setHasError(false)}
        />
      )}
      <ConnectButton />
      {isConnected && <Account />}
    </div>
  );
}

export default Page;
