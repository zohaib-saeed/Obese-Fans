import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Snackbar from "@mui/material/Snackbar";
import { MdOutlineContentCopy as CopyIcon } from "react-icons/md";

import Container from "@/components/Commons/Container/Container";
import ResponsiveHeading from "@/components/Commons/ResponsiveHeading/ResponsiveHeading";
import { tokenDetails } from "@/data/tokenDetails";

const TokenDetails = () => {
  // Snackbar handlers
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // Copy to clipboard functionaloty handler
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleCopyClick = () => {
    const tokenContractAddres = document.getElementById(
      "token-contract-address"
    ).innerHTML;
    copyToClipboard(tokenContractAddres);
    setOpen(true);
  };

  //Desctructuring token details object
  const {
    tokenName,
    tokenSymbol,
    tokenType,
    tokenContractAddress,
    tokenSaleStages,
    presaleContractAddress,
    presaleDetails,
    decimals,
  } = tokenDetails;

  const { calories, currentStagePrice, exchangeListingPrice } = presaleDetails;

  return (
    <React.Fragment>
      <Container id="token-details">
        <div className="w-full  flex flex-col items-center justify-start gap-10 md:gap-12 lg:gap-16 py-10 md:py-12 lg:py-16">
          <ResponsiveHeading text="Token Details" />
          {/* Details Box  */}
          <Fade className="w-full" direction="up" triggerOnce>
            <div className="w-full p-5 md:p-6 mdl:p-9 rounded-xl grid grid-cols-1 mdl:grid-cols-[1.4fr_0.6fr] gap-10 mdl:gap-5 bg-main bg-opacity-20">
              {/* Col 1  */}
              <div className="w-full flex flex-col items-center justify-start gap-5">
                <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* Token  Name */}
                  <div className="flex flex-col items-start justify-start ">
                    <div className="text-left text-white text-base uppercase">
                      token name{" "}
                    </div>
                    <div className="text-left text-white text-lg font-bold ">
                      {tokenName}
                    </div>
                  </div>
                  {/* Token Sale Stages */}
                  <div className="flex flex-col items-start justify-start ">
                    <div className="text-left text-white text-base uppercase">
                      token sale stages
                    </div>
                    <div className="text-left text-white text-lg font-bold ">
                      {tokenSaleStages}
                    </div>
                  </div>
                  {/* Token type*/}
                  <div className="flex flex-col items-start justify-start ">
                    <div className="text-left text-white text-base uppercase">
                      token type
                    </div>
                    <div className="text-left text-white text-lg font-bold ">
                      {tokenType}
                    </div>
                  </div>
                  {/* Token symbol*/}
                  <div className="flex flex-col items-start justify-start ">
                    <div className="text-left text-white text-base uppercase">
                      token symbol
                    </div>
                    <div className="text-left text-white text-lg font-bold ">
                      {tokenSymbol}
                    </div>
                  </div>
                  {/* Decimals*/}
                  <div className="flex flex-col items-start justify-start ">
                    <div className="text-left text-white text-base uppercase">
                      Decimals
                    </div>
                    <div className="text-left text-white text-lg font-bold ">
                      {decimals}
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-start flex-col gap-5">
                  {/*Token Contract Address*/}
                  <div className="w-full flex flex-col items-start gap-1 justify-start ">
                    <div className="text-left text-white text-base uppercase">
                      Token contract address{" "}
                    </div>

                    <div className="w-auto flex items-start md:items-center justify-between flex-col md:flex-row gap-2 md:gap-8 p-[10px] bg-main bg-opacity-20 rounded-md ">
                      <div
                        id="token-contract-address"
                        className="text-left text-white text-sm font-normal break-all"
                      >
                        {tokenContractAddress}
                      </div>
                      <CopyIcon
                        color="white"
                        size={22}
                        className="cursor-pointer"
                        onClick={handleCopyClick}
                      />
                    </div>
                  </div>
                  {/*Presale Contract Address*/}
                  <div className="w-full flex flex-col items-start justify-start gap-1 ">
                    <div className="text-left text-white text-base uppercase">
                      Presale contract address{" "}
                    </div>

                    <div className="w-auto break-words flex items-start md:items-center justify-between flex-col md:flex-row gap-2 md:gap-8 p-[10px] bg-main bg-opacity-20 rounded-md ">
                      <div className="text-left text-white text-sm font-normal break-all">
                        {presaleContractAddress}
                      </div>
                      <CopyIcon
                        color="white"
                        size={22}
                        className="cursor-pointer"
                        onClick={handleCopyClick}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Col 2  */}
              <div className="order-first mdl:order-last w-full h-full flex flex-col items-center justify-start border-opacity-25 mdl:border-l-boulder mdl:border-l mdl:border-l-solid ">
                <div className="w-full flex flex-col items-start justify-start gap-3 mdl:gap-6 mdl:pl-5">
                  <h2 className="text-left text-white font-semibold text-2xl ">
                    Presale Details
                  </h2>
                  {/* Current stage supply */}
                  <div className="flex flex-col items-start justify-start ">
                    <div className="text-left text-white text-base uppercase">
                      {calories} CLRS
                    </div>
                    <div className="text-left text-white text-lg font-bold ">
                      ObeseFans Calories
                    </div>
                  </div>
                  {/* Current stage price */}
                  <div className="flex flex-col items-start justify-start ">
                    <div className="text-left text-white text-base uppercase">
                      current stage price
                    </div>
                    <div className="text-left text-white text-lg font-bold ">
                      1 CLRS = ${currentStagePrice}
                    </div>
                  </div>
                  {/* Exchange listing price */}
                  <div className="flex flex-col items-start justify-start ">
                    <div className="text-left text-white text-base uppercase">
                      exchange listing price
                    </div>
                    <div className="text-left text-white text-lg font-bold ">
                      1 CLRS = ${exchangeListingPrice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Address copied to clipboard"
      />
    </React.Fragment>
  );
};

export default TokenDetails;
