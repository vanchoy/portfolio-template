import styled from 'styled-components';
import '../styles/so-me.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const SoMeLinksStyle = styled.li`
    --so-me-li-margin: 0 20px;
    --so-me-li-text-color: ${(props) => props.color};
    --so-me-li-text-color_hover: ${(props) => props.colorHover};
`;

const SoMe = (props) => {
  const { category } = props;

  if (category === "dev") {
    return (
      <ul className="soMeLinks center">
        <SoMeLinksStyle color="#ffffff" colorHover="#6cc644">
          <a target="_blank" aria-label="Ivan Stoyanov GitHub Profile" rel="noopener noreferrer" href="https://github.com/vanchoy">
            <FontAwesomeIcon icon={brands('github')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#0A66C2">
          <a target="_blank" aria-label="Ivan Stoyanov LinkedIn Profile" rel="noopener noreferrer" href="https://www.linkedin.com/in/ivan-st/">
            <FontAwesomeIcon icon={brands('linkedin')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#8a3ab9">
          <a target="_blank" aria-label="Ivan Stoyanov Instagram Profile" rel="noopener noreferrer" href="https://www.instagram.com/vankatastoyanov/">
            <FontAwesomeIcon icon={brands('instagram')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#FF0000">
          <a target="_blank" aria-label="Ivan Stoyanov YouTube Channel" rel="noopener noreferrer" href="https://youtube.com/@istoyanov">
            <FontAwesomeIcon icon={brands('youtube')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#EE1D52">
          <a target="_blank" aria-label="Ivan Stoyanov TikTok Profile" rel="noopener noreferrer" href="https://www.tiktok.com/@iamvanchoy">
            <FontAwesomeIcon icon={brands('tiktok')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#5865F2">
          <a target="_blank" aria-label="Ivan Stoyanov Discord Profile" rel="noopener noreferrer" href="https://discord.com/channels/@istoyanov#1244">
            <FontAwesomeIcon icon={brands('discord')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#2a9d90">
          <a target="_blank" aria-label="Ivan Stoyanov Email Address" rel="noopener noreferrer" href="mailto:istoyanov.business@gmail.com">
            <FontAwesomeIcon icon={solid('envelope-open-text')} size="3x" />
          </a>
        </SoMeLinksStyle>
      </ul>
    );
  } 
  else if ( category === "art") {
    return (
      <ul className="soMeLinks center">
        <SoMeLinksStyle color="#ffffff" colorHover="#8a3ab9">
          <a target="_blank" aria-label="Ivan Stoyanov Instagram Profile" rel="noopener noreferrer" href="https://www.instagram.com/vankatastoyanov/">
            <FontAwesomeIcon icon={brands('instagram')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#FF0000">
          <a target="_blank" aria-label="Ivan Stoyanov YouTube Channel" rel="noopener noreferrer" href="https://youtube.com/@istoyanov">
            <FontAwesomeIcon icon={brands('youtube')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#EE1D52">
          <a target="_blank" aria-label="Ivan Stoyanov TikTok Profile" rel="noopener noreferrer" href="https://www.tiktok.com/@iamvanchoy">
            <FontAwesomeIcon icon={brands('tiktok')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#00adee">
          <a target="_blank" aria-label="Ivan Stoyanov Displate Profile" rel="noopener noreferrer" href="https://displate.com/istoyanov">
            <FontAwesomeIcon icon={solid('d')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#716b94">
          <a target="_blank" aria-label="Ivan Stoyanov OpenSea Profile" rel="noopener noreferrer" href="https://opensea.io/vanchoy">
            <FontAwesomeIcon icon={brands('ethereum')} size="3x" />
          </a>
        </SoMeLinksStyle>
      </ul>
    );
  }
  else if ( category === "reach") {
    return (
      <ul className="soMeLinks center">
        <SoMeLinksStyle color="#ffffff" colorHover="#0A66C2">
          <a target="_blank" aria-label="Ivan Stoyanov LinkedIn Profile" rel="noopener noreferrer" href="https://www.linkedin.com/in/ivan-st/">
            <FontAwesomeIcon icon={brands('linkedin')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#8a3ab9">
          <a target="_blank" aria-label="Ivan Stoyanov Instagram Profile" rel="noopener noreferrer" href="https://www.instagram.com/vankatastoyanov/">
            <FontAwesomeIcon icon={brands('instagram')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#5865F2">
          <a target="_blank" aria-label="Ivan Stoyanov Discord Profile" rel="noopener noreferrer" href="https://discord.com/channels/@istoyanov#1244">
            <FontAwesomeIcon icon={brands('discord')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#2a9d90">
          <a target="_blank" aria-label="Ivan Stoyanov Email Address" rel="noopener noreferrer" href="mailto:istoyanov.business@gmail.com">
            <FontAwesomeIcon icon={solid('envelope-open-text')} size="3x" />
          </a>
        </SoMeLinksStyle>
      </ul>
    );
  }
};

export default SoMe;