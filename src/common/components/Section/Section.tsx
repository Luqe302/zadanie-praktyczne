import * as S from './Section.styles';
import {LinkButton} from "@/common/components/LinkButton/LinkButton";
import {SectionProps} from "@/common/components/Section/Section.types";

export const Section = ({title, subTitle, text, buttonText, buttonUrl}: SectionProps) => {
    return <S.Wrapper>
        <div>
            <S.Title>{title}</S.Title>
            <S.SubTitle>{subTitle}</S.SubTitle>
        </div>
        <div>{text}</div>
        <LinkButton url={buttonUrl}>{buttonText}</LinkButton>
    </S.Wrapper>
}