import styled from "styled-components";

import * as theme from "../shared/theme";
import { Button } from "../shared/elements";
import { medium } from "../shared/grid";
import spin from "../../utils/spinanim";

export const Modal = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.5s, visibility 0.5s;
  z-index: 900;
  ${props => props.show
    ? `
      opacity: 1;
      visibility: visible;
    `
    : `
      opacity: 0;
      visibility: hidden;
    `}
`;
export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 910;
`;
export const ButtonClose = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 2em;
  position: absolute;
  right: 5px;
  top: 5px;
`;
export const Content = styled.div`
  font-size: 0.875rem;
  height: 80vh;
  left: 50%;
  position: relative;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 920;
  width: 85vw;

  p {
    line-height: 1.25;
    margin: 10px 0;
    text-align: center;
  }
  .text-link {
    color: inherit;
  }
`;
Content.Header = styled.div`
  align-self: center;
  padding: 10px;
  text-align: center;
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
Content.Grid = styled.div`
  ${medium(`
    display: grid;
    grid-template-columns: 3fr 2fr;
  `)}
`;
Content.Body = styled.div``;
Content.Footer = styled.div`
  align-items: start;
  padding: 10px;
`;
export const Wrapper = styled.div`
  align-items: center;
  background: ${theme.gradient6};
  color: #fff;
  display: grid;
  grid-template-rows: 150px 1fr 150px;
  height: 80vh;
  justify-items: center;
`;
export const Refresh = styled.button`
  background: none;
  border: none;
  border-radius: 4px;
  color: ${theme.colors.primaryButtonText};
  cursor: pointer;
  font-size: 0.9em;
  padding: 10px 0;
  & > img {
    height: 14px;
    margin-right: 5px;
  }
`;
export const QRWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  .qr {
    height: calc(80vh - 300px - 100px);
    margin: 10px 0;
    // max-height: 40vh;
    max-width: 90vw;
    ${medium(`
      max-width: 38vw;
      max-height: 50vh;
    `)}
  }
  a {
    color: #fff;
    display: block;
  }
`;
export const LoadingIcon = styled.img`
  ${spin}
  height: 18px;
  margin-left: 10px;
  width: 18px;
`;
export const Status = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
export const Waiting = styled.div`
  color: ${theme.colors.mutedText};
  margin-right: 30px;
  padding: 10px 0;
`;
export const Info = styled.aside`
  background: ${theme.colors.cardAltBg};
  display: none;
  height: 80vh;
  padding: 40px 0 15px;

  h3 {
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 10px;
    text-transform: uppercase;

    &.marginTop {
      margin-top: 30px;
    }
  }
  p {
    color: ${theme.colors.mutedText2};
    margin: 10px 0;
    text-align: left;
  }
  ${medium("display: block;")}
`;
Info.Scrollable = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 10px 30px;
`;
Info.BottomBar = styled.div`
  background: ${theme.colors.cardAltBg};
  bottom: 0;
  height: 10px;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 2;
`;
export const Card = styled.div`
  background: ${theme.main.bg};
  border-radius: 5px;
  box-shadow: 0px 0px 8px rgba(63, 61, 75, 0.1);
  padding: 20px;
`;
export const Entity = styled.div`
  & > hr {
    border: none;
    border-top: solid 1px ${theme.colors.border};
    left: -5%;
    margin: 10px 0 !important;
    position: relative;
    width: 110%;
  }
`;
Entity.Header = styled.div`
  display: grid;
  grid-gap: 0 10px;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 2fr 3fr;
`;
Entity.Header.Main = styled.h4`
  align-self: center;
  font-size: 1.125rem;
  font-weight: 600;
`;
Entity.Header.Sub = styled.div`
  align-self: end;
  color: ${theme.colors.primary};
  font-size: 0.6875rem;
  font-weight: 600;
  grid-area: 1 / 2 / 2 / 3;
  text-transform: uppercase;
`;
Entity.Logo = styled.img`
  border-radius: 15px;
  grid-area: 1 / 1 / 3 / 2;
  max-height: 60px;
  max-width: 60px;
`;
Entity.Details = styled.div``;
Entity.Details.Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 15px 0;
  & + & {
    border-top: solid 1px ${theme.colors.border};
  }
`;
Entity.Details.Heading = styled.div`
  font-size: 0.6875rem;
  grid-area: 1 / 1 / 2 / 3;
  margin-bottom: 10px;
  text-transform: uppercase;
`;
Entity.Details.Name = styled.div`
  ${props => props.wide ? "grid-column: span 2;" : ""}
`;
Entity.Details.Value = styled.div`
  color: ${theme.colors.mutedText2};
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Claims = styled.div``;
export const Claim = styled.div`
  display: flex;
  padding: 10px 0;
  & + & {
    border-top: solid 1px ${theme.colors.border};
  }
`;
Claim.Name = styled.div`
  flex: 1;
`;
Claim.Value = styled.div`
  color: ${theme.colors.mutedText2};
  flex: 1;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const DoneButton = styled(Button)`
  &, &:hover {
    background: none;
  }
  border: solid 1px #fff;
  margin: 0 auto 20px;
  padding-left: 30px;
  padding-right: 30px;
`;
