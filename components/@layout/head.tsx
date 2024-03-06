"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ArrowDownIcon } from "./icons";
import userProfilPic from "@/assets/@images/profil.jpg";

export const TopBar = ({userFullName}: {userFullName: string}) => {
  return (
    <div className="flex items-center user-profil">
          <Image
            src={userProfilPic}
            width={32}
            height={32}
            alt="user profil pic"
            priority
            className="rounded-full object-cover w-8 h-8  mr-2"
          />
          <button type="button" className="flex items-center">
            <span className="text-xs mr-2">{userFullName}</span>
            <ArrowDownIcon color="#7C8DB5" className="w-2" />
          </button>
        </div>
  );
};
