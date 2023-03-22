import React from "react";
import * as S from './TextWithBackground.styles';
import {TextWithBackgroundProps} from "@/common/components/TextWithBackground/TextWithBackground.types";

export const TextWithBackground = ({bgImage, children}: TextWithBackgroundProps & { children: React.ReactNode }) => {
    console.log(bgImage);
    return <S.Wrapper bgImage={bgImage}>
        {children}
    </S.Wrapper>
}