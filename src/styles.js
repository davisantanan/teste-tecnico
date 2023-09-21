import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
`;

export const MainContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const FormStage = styled.div `
    width: 100%;
    margin-bottom: 20px;
`;

export const StageTitle = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`;

export const StageNumberContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #008ae6;
    
`;

export const StageNumber = styled.span `
    font-size: 18px;
    color: #008ae6;
    padding: 3px;
`;

export const StageText = styled.span `
    font-size: 22px;
    color: #008ae6;
`;

export const StageDescription = styled.span `
    font-size: 16px;
    color: gray;
    margin: 50px 0 10px 0;

`;

export const InputGroupContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 15px;
    gap: 15px;
`;

export const InputContent = styled.div `
    width: 100%;
    display: flex;
    position: relative;
    
    :focus{
        border: 1px solid #008ae6;
    }
`;

export const InputIconContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 100%;
    position: absolute;
    margin-left: 10px;
`;

export const InputIcon = styled.img `
    width: 20px;
    height: 20px;
`; 

export const InputFieldEmail = styled.input `
    width: 100%;
    height: 30px;
    padding: 19px 5px 5px 42px;
    border: 1px solid #a6a6a6;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
`;

export const InputLabelIcon = styled.div `
    position: absolute;
    top: 10px;
    pointer-events: none;
    font-family: sans-serif;
    padding-left: 42px;
    font-size: 12px;
    color: gray;  
`;

export const LineContainerInput = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
`;

export const InputFieldName = styled.input `
    width: 295px;
    height: 30px;
    padding: 19px 5px 5px 20px;
    border: 1px solid #a6a6a6;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
`;

export const InputLabel = styled.div `
    position: absolute;
    top: 10px;
    pointer-events: none;
    font-family: sans-serif;
    padding-left: 20px;
    font-size: 12px;
    color: gray;  
`;

export const InputFieldMedium = styled.input `
    width: 150px;
    height: 30px;
    padding: 19px 5px 5px 20px;
    border: 1px solid #a6a6a6;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
`;

export const InputContainer = styled.div `
    display: flex;
    flex-direction: column;
`;

export const InputMessageContainer = styled.div `
    width: 100%;
    display: flex;
    margin-top: 5px;
`;

export const CpfMessageIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
`;

export const CpfMessageIcon = styled.img `
    width: 12px;
    height: 12px;
`;

export const CpfMessage = styled.span `
    color: gray;  
    font-size: 11px;  
`;

export const InputFieldCep = styled.input `
    width: 295px;
    height: 30px;
    padding: 19px 5px 5px 42px;
    border: 1px solid #a6a6a6;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
`;

export const InputFieldAddress = styled.input `
    width: 512px;
    height: 30px;
    padding: 19px 5px 5px 42px;
    border: 1px solid #a6a6a6;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
`;

export const InputFieldShort = styled.input `
    width: 105px;
    height: 30px;
    padding: 19px 5px 5px 20px;
    border: 1px solid #a6a6a6;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
`;

export const ShippingContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ShippingContainerTitle = styled.span `
    font-size: 16px;
    color: gray;
    margin-bottom: 15px;
`;

export const CheckBoxContainer = styled.div `
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    border: ${({ selectedOption }) => selectedOption ? 'solid 1px #008ae6' : 'solid 1px gray' };
    border-radius: 5px;
`;

export const InformationCheckBoxContainer = styled.div `
    width: 100%;
    justify-content: space-between;
    display: flex;

`;

export const TextCheckBoxContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

export const InputCheckBox = styled.input `
    margin: 0 10px;
    height: 20px;
    width: 30px;

`;

export const LabelCheckBox = styled.span `
    color: #595959;
    font-size: 17px;
`;

export const DescriptionCheckBox = styled.span `
    color: #595959;
    font-size: 14px;
`;

export const ValueContainer = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ValueCheckBox = styled.span `
    font-size: 17px;
    color: #595959;
    margin-right: 10px;
`;

export const FooterContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
`;

export const TextFooterContainer = styled.div `
    display: flex;
    gap: 5px;
    pointer-events: none;
`;

export const TextFooterIcon = styled.img `
    width: 20px;
`;

export const TextFooter = styled.span `
    font-size: 15px;
    color: #008000;
`;

export const SubmitButton = styled.button `
    width: 180px;
    height: 55px;
    background-color: #008ae6;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    box-sizing: border-box;
    border: none;
    outline: none;
`;

export const IconButton = styled.img `
    width: 22px;
`;

export const ErrorMessage = styled.span `
    color: red;
    font-size: 12px;
    margin-top: 5px;
`;
