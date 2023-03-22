import React from "react";
import * as S from './LinkButton.styles';
import {LinkButtonProps} from "@/common/components/LinkButton/LinkButton.types";

export const LinkButton = ({url, children}: LinkButtonProps & {children: React.ReactNode}) => {

    return <S.LinkButton href={url}>{children}</S.LinkButton>;
}