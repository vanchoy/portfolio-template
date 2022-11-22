import { useState, useRef } from 'react';
import styled from 'styled-components';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import SoMe from '../components/SoMe';
import ButtonArrow from '../components/buttons/ButtonArrow';
import { ButtonRegular } from '../components/buttons/ButtonRegular';
import ProjectLogo from '../components/ProjectLogo';

import '../styles/form.scss';
import 'animate.css/animate.min.css';

import data from '../api/data.json';

import { executeScroll } from '../js/scroll';
import { buttonColor, whiteRegular } from '../constants/styles';
import {
  heroWallpaper,
  webDevWallpaper,
  generalProjectsWallpaper,
  multimediaWallpaper,
  artWalppaper,
  artExpoWallpaper,
  aboutWalppaper,
  profilePicture,
  jsLogo,
  reactLogo,
  phpLogo,
  mysqlLogo,
  mongodbLogo,
  cssLogo,
  htmlLogo,
  toolsAndTechnologies,
  uiuxLogo,
  pwaLogo,
  rwdLogo,
  seoLogo
} from '../js/images';

const HeroSectionStyle = styled.section`
  /* ====== SECTION SETTINGS ====== */
    /* ~  (Section Syle)  ~ */
      --section-bg-s1-margin: 0 auto;
      --section-bg-s1-min_height: 100vh;
      --section-bg-s1-max_height: 100%;
      --section-bg-s1-padding: 20px;
      --section-bg-s1-bg_color: rgba(0,0,0, 0.6);
      --section-bg-s1-bg_image: url(${heroWallpaper});
      --section-bg-s1-bg_attachment: fixed;
      --section-bg-s1-bg_position: center;
      --section-bg-s1-bg_repeat: no-repeat;
      --section-bg-s1-bg_blend_mode: darken;
      --section-bg-s1-bg_size: cover;
      --section-bg-s1-box_shadow: none;
      overflow: hidden;
    /* ----------~(end)~---------- */
    
    /* ~  (Section Title)  ~ */
      h1 {
        --section-text-margin: 0 auto;
        --section-text-padding: 0px;
        --section-text-display: block;
        --section-text-color: #fff;
        --section-font_family: 'Satoshi', sans-serif;
        --section-font_size: 4vmax;
        --section-font_weight: bold;
        --section-font_style: normal;
        --section-text_align: center;
        --section-text_decoration: none;
        --section-text_shadow: 1px 1px 1px #2a9d90;
        --section-text-line_height: 1.5;
      }
    /* ----------~(end)~---------- */

    /* ~  (Section SubTitle)  ~ */
      h2 {
        --section-text-margin: 0 auto;
        --section-text-padding: 10px 10px;
        --section-text-display: inline-block;
        --section-text-color: #fff;
        --section-font_family: 'Satoshi', sans-serif;
        --section-font_size: 2vmax;
        --section-font_weight: normal;
        --section-font_style: normal;
        --section-text_decoration: none;
        --section-text_align: center;
        --section-text_shadow: 1px 1px 1px #666;
        --section-text-line_height: 1.3;
      }
    /* ----------~(end)~---------- */

    header {
      margin: 0 0 20px 0;
    }

    @media screen and (min-width: 1281px) {
      padding-top: 60px;
    }

  /* For more settings go to ["styles/index.scss"] */
  /* =================|END|================= */
`;

const MyImage = styled.img`
  width: 320px;
  max-width: 100%;
  height: auto;
  display: block;
  position: relative;
  border-radius: 50%;
  box-shadow: 0 0 26px 3px rgba(255,255,255,0.06);
  box-sizing: border-box;
`;

const WebDevSectionStyle = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: 100vh;
  --section-bg-s1-max_height: 100%;
  --section-bg-s1-padding: 20px;
  --section-bg-s1-bg_color: rgba(0,0,0, 0.83);
  --section-bg-s1-bg_image: url(${webDevWallpaper});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: overlay;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;
  scroll-margin-top: 90px;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 0 20px 0;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 4vmax;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: underline overline dotted rgba(42,157,144,0.1);
      text-underline-offset: 30%;
      --section-text_shadow: 1px 1px 1px #2a9d90;
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0 0 20px 0;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 2vmax;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #666;
      --section-text-line_height: 1.3;
    }
    
    /* For more settings go to ["styles/index.scss"] */
`;

const DevLogo = styled.img`
  margin: 0 auto;
  padding: 10px;
  max-width: 100%;
  height: auto;
  display: block;
  position: relative;
  text-align: center;
  box-sizing: border-box;

  @media screen and (max-width:640px) {
    max-width: 20%;
    display: inline-block;
  }
`;

const ProjectsSectionStyle = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: 100vh;
  --section-bg-s1-max_height: 100%;
  --section-bg-s1-padding: 20px;
  --section-bg-s1-bg_color: rgba(0,0,0, 0.6);
  --section-bg-s1-bg_image: url(${generalProjectsWallpaper});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: darken;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;
  scroll-margin-top: 90px;
  
  h1 {
    --section-text-margin: 0 auto;
    --section-text-padding: 20px 0 20px 0;
    --section-text-display: block;
    --section-text-color: #fff;
    --section-font_family: 'Satoshi', sans-serif;
    --section-font_size: 4vmax;
    --section-font_weight: bold;
    --section-font_style: normal;
    --section-text_align: center;
    --section-text_decoration: underline overline dotted rgba(42,157,144,0.1);
    text-underline-offset: 30%;
    --section-text_shadow: 1px 1px 1px #2a9d90;
    --section-text-line_height: 1.5;
  }

  h2 {
    --section-text-margin: 0 auto;
    --section-text-padding: 0;
    --section-text-display: block;
    --section-text-color: #fff;
    --section-font_family: 'Satoshi', sans-serif;
    --section-font_size: 2vmax;
    --section-font_weight: normal;
    --section-font_style: normal;
    --section-text_decoration: none;
    --section-text_align: center;
    --section-text_shadow: 1px 1px 1px #666;
    --section-text-line_height: 1.3;
  }

  /* ~  (Section H3 Style)  ~ */
    h3 {
      --section-text-margin: 0 auto;
      --section-text-padding: 10px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 2vmax;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: left;
      --section-text_shadow: 1px 1px 1px #333;
      --section-text-line_height: 1.5;

      &:hover {
        color: #33b9aa;
        text-shadow: 1px 1px 1px #111;
      }
    }
  /* ----------~(end)~---------- */

  header {
    top: 0;
    position: relative;
    scroll-margin-top: 90px;
  }

  .title {
    padding: 0 20px;
  }
  
  .icon-pos {
    &.left {
      text-align: left;
    }
    &.right {
      text-align: right;
    }
  }
  
  .projects-pos {
    margin: 20px 0 0 0;
  }

  .line {
    margin: 10px;
    border-bottom: 4px dotted #fff;
  }

  .form-item-pos {
    padding: 0 10px 80px 10px;
  }

  @media screen and (max-width:319px) {
    h3 {
      text-align: center !important;
    }

    .title {
      padding: 0;
    }
  }
   
  /* For more settings go to ["styles/index.scss"] */
`;

const ProjectForm = styled.article`
  /* ====== PROFILE FORM STYLE ====== */
    /* ~  (Form Settings)  ~ */
      --form-width: 100%;
      --form-max_width: 100%;
      --form-height: 100%;
      --form-position: relative;
      --form-display: block;
      --form-text-align: center;
      --form-bg-color: #f6f6f6;
      --form-padding: 0;
      --form-border-radius: 23px 60px 0 0;
      --form-border: none;
      --form-box-shadow: 0 0 9px 1px rgba(255, 255, 255, 0.3);
    /* ----------~(end)~---------- */

    /* ~  (Section H3 Style)  ~ */
      h4 {
        --section-text-margin: 0 auto;
        --section-text-padding: 10px 20px;
        --section-text-display: block;
        --section-text-color: #222 !important;
        --section-font_family: 'Roboto', sans-serif;
        --section-font_size: 20px;
        --section-font_weight: bold;
        --section-font_style: normal;
        --section-text_decoration: none;
        --section-text_align: center;
        --section-text_shadow: 1px 1px 1px #d2d2d2 !important;
        --section-text-line_height: 1.5;

        :hover {
          color: inherit !important;
        }
      }
    /* ----------~(end)~---------- */

    /* ~  (Section Paragraph Style)  ~ */
      p {
        --section-text-margin: 0 auto;
        --section-text-padding: 0 20px 15px 20px;
        --section-text-display: block;
        --section-text-color: #333;
        --section-font_family: 'Inter', sans-serif;
        --section-font_size: 16px;
        --section-font_weight: normal;
        --section-font_style: normal;
        --section-text_decoration: none;
        --section-text_align: left;
        --section-text_shadow: none;
        --section-text-line_height: 1.3;

        span {
          display: inline-block;
          margin-right: 3px;
          text-align: center !important;
          position: relative;
        }
      }
    /* ----------~(end)~---------- */

    a.repo {
      color: #2a9d90;
      font-style: oblique;
      font-weight: bold;
      font-family: inherit;

      &:hover {
        color: #0082cc;
      }
    }

    .title-container {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.01);
    }

    .description-container {
      background: linear-gradient(#f9f9f9, #fefefe);
      height: 125px;
      padding-top: 0;
      padding-bottom: 0;
      min-height: auto;
      display: block;
      overflow-y: auto;
      box-shadow: 0 3px 1px rgba(0,0,0,0.01);
    }

    .button-pos {
      width: 100%;
      position: absolute;
      bottom: -62px;
    }
    
    .details-icon {
      margin: 0 5px 0 0;
      color: #2a9d90;
    }

    .solid-line {
      border-bottom: 1px solid #f9f9f9;
    }

    .padding-top {
      padding: 15px 0 0 0;
    }
  /* =================|END|================= */

  @media screen and (max-width:375px) {
    p span {
      text-align: center;
      display: block;
    }
  }

  @media screen and (max-width:640px) {
    .description-container, .title-container {
      height: auto;
      min-height: auto;
      display: block;
    }
  }  
`;

const MultimediaSectionStyle = styled.section`
/* ====== SECTION SETTINGS ====== */
  /* ~  (Section Syle)  ~ */
    --section-bg-s1-margin: 0 auto;
    --section-bg-s1-min_height: 100vh;
    --section-bg-s1-max_height: 100%;
    --section-bg-s1-padding: 20px;
    --section-bg-s1-bg_color: rgba(0,0,0, 0.8);
    --section-bg-s1-bg_image: url(${multimediaWallpaper});
    --section-bg-s1-bg_attachment: fixed;
    --section-bg-s1-bg_position: center;
    --section-bg-s1-bg_repeat: no-repeat;
    --section-bg-s1-bg_blend_mode: darken;
    --section-bg-s1-bg_size: cover;
    --section-bg-s1-box_shadow: none;
    scroll-margin-top: 90px;
  /* ----------~(end)~---------- */

  h1 {
    --section-text-margin: 0 auto;
    --section-text-padding: 20px 0 20px 0;
    --section-text-display: block;
    --section-text-color: #fff;
    --section-font_family: 'Satoshi', sans-serif;
    --section-font_size: 4vmax;
    --section-font_weight: bold;
    --section-font_style: normal;
    --section-text_align: center;
    --section-text_decoration: underline overline dotted rgba(42,157,144,0.1);
    text-underline-offset: 30%;
    --section-text_shadow: 1px 1px 1px #2a9d90;
    --section-text-line_height: 1.5;
  }

  h2 {
    --section-text-margin: 0 auto;
    --section-text-padding: 0;
    --section-text-display: block;
    --section-text-color: #fff;
    --section-font_family: 'Satoshi', sans-serif;
    --section-font_size: 2vmax;
    --section-font_weight: normal;
    --section-font_style: normal;
    --section-text_decoration: none;
    --section-text_align: center;
    --section-text_shadow: 1px 1px 1px #666;
    --section-text-line_height: 1.3;
  }

  /* ~  (Section H3 Style)  ~ */
    h3 {
      --section-text-margin: 0 auto;
      --section-text-padding: 10px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 2vmax;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: left;
      --section-text_shadow: 1px 1px 1px #333;
      --section-text-line_height: 1.5;

      &:hover {
        color: #33b9aa;
        text-shadow: 1px 1px 1px #111;
      }
    }
  /* ----------~(end)~---------- */

  header {
    scroll-margin-top: 90px;
  }

  .title {
    padding: 0 20px;
  }

  .icon-pos {
    &.left {
      text-align: left;
    }
    &.right {
      text-align: right;
    }
  }

  .projects-pos {
    margin: 20px 0 0 0;
  }

  .line {
    margin: 10px;
    border-bottom: 4px dotted #fff;
  }

  .form-item-pos {
    padding: 0 10px 80px 10px;
  }

  @media screen and (max-width:319px) {
    h3 {
      text-align: center !important;
    }

    .title {
      padding: 0;
    }
  }

/* For more settings go to ["styles/index.scss"] */
/* =================|END|================= */
`;

const ArtSectionStyle = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: 100vh;
  --section-bg-s1-max_height: 100%;
  --section-bg-s1-padding: 20px;
  --section-bg-s1-bg_color: rgba(17,17,17, 0.9);
  --section-bg-s1-bg_image: url(${artWalppaper});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: overlay;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;
  scroll-margin-top: 90px;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 0 20px 0;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 4vmax;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: underline overline dotted rgba(42,157,144,0.1);
      text-underline-offset: 30%;
      --section-text_shadow: 1px 1px 1px #2a9d90;
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0 0 20px 0;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 2vmax;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #666;
      --section-text-line_height: 1.3;
    }
    
    /* For more settings go to ["styles/index.scss"] */
`;

const ArtExpoSectionStyle = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: 100vh;
  --section-bg-s1-max_height: 100%;
  --section-bg-s1-padding: 20px;
  --section-bg-s1-bg_color: rgba(17,17,17, 0.9);
  --section-bg-s1-bg_image: url(${artExpoWallpaper});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: overlay;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;
  scroll-margin-top: 90px;

  h1 {
    --section-text-margin: 0 auto;
    --section-text-padding: 20px 0 20px 0;
    --section-text-display: block;
    --section-text-color: #fff;
    --section-font_family: 'Satoshi', sans-serif;
    --section-font_size: 4vmax;
    --section-font_weight: bold;
    --section-font_style: normal;
    --section-text_align: center;
    --section-text_decoration: none;
    --section-text_shadow: 1px 1px 1px #333;
    --section-text-line_height: 1.5;
  }

  h2 {
    --section-text-margin: 0 auto;
    --section-text-padding: 0;
    --section-text-display: block;
    --section-text-color: #fff;
    --section-font_family: 'Satoshi', sans-serif;
    --section-font_size: 2vmax;
    --section-font_weight: normal;
    --section-font_style: oblique;
    --section-text_decoration: none;
    --section-text_align: center;
    --section-text_shadow: 1px 1px 1px #666;
    --section-text-line_height: 1.3;
  }
  
  /* For more settings go to ["styles/index.scss"] */
`;

const AboutSectionStyle = styled.article`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: 100vh;
  --section-bg-s1-max_height: 100%;
  --section-bg-s1-padding: 20px;
  --section-bg-s1-bg_color: rgba(17,17,17, 0.9);
  --section-bg-s1-bg_image: url(${aboutWalppaper});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: overlay;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;
  scroll-margin-top: 90px;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 0 0 0;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 4vmax;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: underline overline dotted rgba(42,157,144,0.1);
      text-underline-offset: 30%;
      --section-text_shadow: 1px 1px 1px #2a9d90;
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 20px 0 20px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 2vmax;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #666;
      --section-text-line_height: 1.3;
    }

    p {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 20px 0 20px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 18px;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: left;
      --section-text_shadow: 1px 1px 1px #666;
      --section-text-line_height: 1.3;
    }
    
    /* For more settings go to ["styles/index.scss"] */
`;

const anstyle = {
  display: 'inline-block'
};

const MainPage = () => {
  let webDevRef = useRef(0);
  let projectsRef = useRef(0);
  let multimediaRef = useRef(0);
  let artRef = useRef(0);
  let artExpoRef = useRef(0);
  let aboutRef = useRef(0);
  let generalProjectsRef = useRef(0);
  let openSourceProjectsRef = useRef(0);
  let cmsProjectsRef = useRef(0);
  let mixedMediaProjectsRef = useRef(0);
  let uiuxRef = useRef(0);
  let usefulResourcesRef = useRef(0);

  const [toggleGeneral, setToggleGeneral] = useState(false);
  const [toggleOpenSource, setToggleOpenSource] = useState(false);
  const [toggleCMS, setToggleCMS] = useState(false);
  const [toggleMixedMedia, setToggleMixedMedia] = useState(false);
  const [toggleUiUxDesign, setToggleUiUxDesign] = useState(false);
  const [toggleUsefulResources, setToggleUsefulResources] = useState(false);

  const displayProjects = (data, projectCategory, projectsType) => {
    return data.filter(project => project.category === projectCategory && project.type === projectsType).map((project, id) => {
      return (
        <div key={id} className="form-item-pos" animateIn="animate__fadeInUp">
          <ProjectForm className="grid form">
            <ProjectLogo className="grid-col-all" imgSrc={project.image} title={`This is the logo for the project - ${project.title}`} />
            <header className="grid-col-all">
              <h4 className="title-container">
                {project.title}
              </h4>
            </header>
            <div className="grid-col-all">
              <p className="description-container">{project.description}</p>
              <div className="solid-line" />
              {
                project.category === "webdev" && (
                  <>
                    <p>
                      <span className="padding-top">
                        <FontAwesomeIcon className="details-icon" icon={solid('user-tag')} fixedWidth />
                        <b>Roles: </b>
                      </span>
                      {
                        project.roles.map((el, id) => {
                          return (
                            <span>
                              <i>{el}{id + 1 < project.roles.length && ", "}</i>
                            </span>
                          );
                        })
                      }

                    </p>
                    <p>
                      <span>
                        <FontAwesomeIcon className="details-icon" icon={solid('calendar-alt')} fixedWidth />
                        <b>Active period: </b>
                      </span>
                      <span>
                        <i>{project.period}</i>
                      </span>
                    </p>
                  </>
                )
              }
              {
                projectsType === "opensource" && (
                  <>
                    {
                      project.demo &&
                      (
                        <p>
                          <span>
                            <FontAwesomeIcon className="details-icon" icon={brands('github')} fixedWidth />
                            <b>GitHub: </b>
                          </span>
                          <span>
                            <i><a className="repo" href={project.repository} target="_blank" rel="noopener noreferrer">See the repository</a></i>
                          </span>
                        </p>
                      )
                    }
                  </>
                )
              }
              {
                projectsType === "cms" && (
                  <>
                    {
                      !project.demo ?
                        (
                          <p>
                            <span>
                              <FontAwesomeIcon className="details-icon" icon={solid('link')} fixedWidth />
                              <b>Former URL:</b>
                            </span>
                            <span>
                              <i>{project.link}</i>
                            </span>
                          </p>
                        )
                        :
                        (
                          <p>
                            <span>
                              <FontAwesomeIcon className="details-icon" icon={solid('link')} fixedWidth />
                              <b>Active URL:</b>
                            </span>
                            <span>
                              <i>{project.link}</i>
                            </span>
                          </p>
                        )
                    }
                  </>
                )
              }
            </div>
            <div className="grid-col-all">
              <div className="button-pos">
                {
                  project.demo ?
                    (
                      <ButtonRegular type="button" linkRef={project.link} btnWidth="100%" btnColor={buttonColor} btnHover="#0082cc" btnTextColor={whiteRegular} btnTextHoverColor={whiteRegular} btnBorderRadius="0 0 9px 60px" btnText="Check it out">
                        <FontAwesomeIcon pull="right" icon={solid('external-link')} size="1x" />
                      </ButtonRegular>
                    )
                    :
                    (
                      <ButtonRegular className="cursor-disabled" btnWidth="100%" btnColor="#d0d0d0" btnHover="#d9d9d9" btnTextColor="#333" btnTextHoverColor="#972222" btnBorderRadius="0 0 9px 60px" btnText="Unavailable">
                        <FontAwesomeIcon pull="right" icon={solid('link-slash')} size="1x" />
                      </ButtonRegular>
                    )
                }
              </div>
            </div>
          </ProjectForm>
        </div>
      );
    });
  };

  return (
    <>
      <HeroSectionStyle id="#" className="grid section">
        <header className="grid-wrapper-column grid-col-center">
          <AnimationOnScroll animateIn="animate__jello">
            <h1>
              IVAN STOYANOV
            </h1>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeft" style={anstyle}>
            <h2>&#x2022; Web Development Student</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" style={anstyle}>
            <h2>&#x2022; Multimedia Designer</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown" style={anstyle}>
            <h2>&#x2022; Pointillism Artist</h2>
          </AnimationOnScroll>
        </header>
        <div className="grid-wrapper-column">
          <AnimationOnScroll animateIn="animate__fadeIn">
            <MyImage width="320" height="320" fetchpriority="high" className="center" src={profilePicture} alt="Ivan Stoyanov Profile Photo" />
          </AnimationOnScroll>
        </div>
        <div className="grid-col-all">
          <AnimationOnScroll animateIn="animate__fadeIn">
            <SoMe category="dev" />
          </AnimationOnScroll>
        </div>
        <div className="grid-col-all">
          <ButtonArrow className="center" onClick={webDevRef} />
        </div>
      </HeroSectionStyle>
      <WebDevSectionStyle id="web-development" className="grid section" ref={webDevRef}>
        <header className="grid-wrapper-column grid-col-center">
          <h1>Web Development</h1>
          <AnimationOnScroll animateIn="animate__slideInDown">
            <h2>I am an aspiring <i>Full-stack Developer</i> with focus on <i>UI/UX Design</i> to offer the best possible experience for clients and users.</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>Currently finishing my Bachelor's degree in <i>Web Development</i> at the Business Academy Aarhus.</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>I work with the following languages, web tools and technologies</h2>
          </AnimationOnScroll>
        </header>
        <div className="grid-wrapper-column grid-list-12reg-12lrg-9mid-7sml">
          <DevLogo width="100" height="100" src={jsLogo} alt="JavaScript Logo" />
          <DevLogo width="100" height="100" src={reactLogo} alt="ReactJS Logo" />
          <DevLogo width="100" height="100" src={phpLogo} alt="PHP Logo" />
          <DevLogo width="100" height="100" src={mysqlLogo} alt="MySQL Logo" />
          <DevLogo width="100" height="100" src={mongodbLogo} alt="MongoDB Logo" />
          <DevLogo width="100" height="100" src={cssLogo} alt="CSS3 Logo" />
          <DevLogo width="100" height="100" src={htmlLogo} alt="HTML5 Logo" />
          <DevLogo width="100" height="100" src={toolsAndTechnologies} alt="Tools and technologies logo" />
          <DevLogo width="100" height="100" src={uiuxLogo} alt="UI/UX Logo" />
          <DevLogo width="100" height="100" src={pwaLogo} alt="Progressive Web Applications Logo" />
          <DevLogo width="100" height="100" src={rwdLogo} alt="Responsive Web Design Logo" />
          <DevLogo width="100" height="100" src={seoLogo} alt="SEO Logo" />
        </div>
        <div className="grid-col-all">
          <ButtonRegular type="button" onClick={() => executeScroll(projectsRef)} btnMargin="20px auto" btnColor={whiteRegular} btnHover={buttonColor} btnTextColor="#111" btnTextHoverColor={whiteRegular} btnText="Explore projects">
            <FontAwesomeIcon pull="right" icon={solid('cubes')} size="1x" />
          </ButtonRegular>
        </div>
      </WebDevSectionStyle>
      <ProjectsSectionStyle className="grid section" ref={projectsRef}>
        <header className="grid-wrapper-column grid-col-center">
          <h1>My Project Work</h1>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>Explore my personal, study, volunteer and work Web Dev projects. <br /> Choose a category down bellow to start</h2>
          </AnimationOnScroll>
        </header>
        <section className="grid-wrapper-column">
          <section className="grid">
            <header id="general-projects" className="grid-col-all clearfix cursor-pointer" onClick={() => { !toggleGeneral && executeScroll(generalProjectsRef); setToggleGeneral(!toggleGeneral); }} ref={generalProjectsRef}>
              <h3>
                <span className="left icon-pos">
                  <FontAwesomeIcon icon={solid('laptop-code')} />
                </span>
                <em className="title">General Projects</em>
                <span className="right icon-pos">
                  <FontAwesomeIcon icon={solid('chevron-down')} rotation={toggleGeneral ? 180 : 0} />
                </span>
              </h3>
            </header>
            <div className="grid-col-all line" />
            {
              toggleGeneral && (
                <div className="grid-col-all grid-list-3reg-3lrg-3mid-2sml projects-pos">
                  {displayProjects(data, "webdev", "general")}
                </div>
              )
            }
          </section>
          <section className="grid">
            <header id="opensource-projects" className="grid-col-all clearfix cursor-pointer" onClick={() => { !toggleOpenSource && executeScroll(openSourceProjectsRef); setToggleOpenSource(!toggleOpenSource); }} ref={openSourceProjectsRef}>
              <h3>
                <span className="left icon-pos">
                  <FontAwesomeIcon icon={brands('github')} />
                </span>
                <em className="title">OpenSource Projects</em>
                <span className="right icon-pos">
                  <FontAwesomeIcon icon={solid('chevron-down')} rotation={toggleOpenSource ? 180 : 0} />
                </span>
              </h3>
            </header>
            <div className="grid-col-all line" />
            {
              toggleOpenSource && (
                <div className="grid-col-all grid-list-3reg-3lrg-3mid-2sml projects-pos">
                  {displayProjects(data, "webdev", "opensource")}
                </div>
              )
            }
          </section>
          <section className="grid">
            <header id="cms-projects" className="grid-col-all clearfix cursor-pointer" onClick={() => { !toggleCMS && executeScroll(cmsProjectsRef); setToggleCMS(!toggleCMS); }} ref={cmsProjectsRef}>
              <h3>
                <span className="left icon-pos">
                  <FontAwesomeIcon icon={brands('wordpress')} />
                </span>
                <em className="title">CMS Projects</em>
                <span className="right icon-pos">
                  <FontAwesomeIcon icon={solid('chevron-down')} rotation={toggleCMS ? 180 : 0} />
                </span>
              </h3>
            </header>
            <div className="grid-col-all line" />
            {
              toggleCMS && (
                <div className="grid-col-all grid-list-3reg-3lrg-3mid-2sml projects-pos">
                  {displayProjects(data, "webdev", "cms")}
                </div>
              )
            }
          </section>
        </section>
        <ButtonArrow className="grid-wrapper-column center" onClick={multimediaRef} />
      </ProjectsSectionStyle>
      <MultimediaSectionStyle id="multimedia-design" className="grid section" ref={multimediaRef}>
        <header className="grid-wrapper-column grid-col-center">
          <h1>Multimedia Design</h1>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>I have an AP Degree from UCN Aalborg as a <i>Multimedia Designer</i> with expertise in <i>UI/UX, Content production, Business and Technology.</i></h2>
          </AnimationOnScroll>
        </header>
        <section className="grid-wrapper-column">
          <section className="grid">
            <header id="ui-ux" className="grid-col-all clearfix cursor-pointer" onClick={() => { !toggleUiUxDesign && executeScroll(uiuxRef); setToggleUiUxDesign(!toggleUiUxDesign); }} ref={uiuxRef}>
              <h3>
                <span className="left icon-pos">
                  <FontAwesomeIcon icon={solid('desktop')} />
                </span>
                <em className="title">Design & Research</em>
                <span className="right icon-pos">
                  <FontAwesomeIcon icon={solid('chevron-down')} rotation={toggleUiUxDesign ? 180 : 0} />
                </span>
              </h3>
            </header>
            <div className="grid-col-all line" />
            {
              toggleUiUxDesign && (
                <div className="grid-col-all grid-list-3reg-3lrg-3mid-2sml projects-pos">
                  {displayProjects(data, "multimedia", "uiux")}
                </div>
              )
            }
          </section>
          <section className="grid">
            <header id="mixed-media" className="grid-col-all clearfix cursor-pointer" onClick={() => { !toggleMixedMedia && executeScroll(mixedMediaProjectsRef); setToggleMixedMedia(!toggleMixedMedia); }} ref={mixedMediaProjectsRef}>
              <h3>
                <span className="left icon-pos">
                  <FontAwesomeIcon icon={solid('globe')} />
                </span>
                <em className="title">Mixed Media</em>
                <span className="right icon-pos">
                  <FontAwesomeIcon icon={solid('chevron-down')} rotation={toggleMixedMedia ? 180 : 0} />
                </span>
              </h3>
            </header>
            <div className="grid-col-all line" />
            {
              toggleMixedMedia && (
                <div className="grid-col-all grid-list-3reg-3lrg-3mid-2sml projects-pos">
                  {displayProjects(data, "multimedia", "mixedmedia")}
                </div>
              )
            }
          </section>
          <section className="grid">
            <header id="useful-resources" className="grid-col-all clearfix cursor-pointer" onClick={() => { !toggleUsefulResources && executeScroll(usefulResourcesRef); setToggleUsefulResources(!toggleUsefulResources); }} ref={usefulResourcesRef}>
              <h3>
                <span className="left icon-pos">
                  <FontAwesomeIcon icon={solid('book-open')} />
                </span>
                <em className="title">Useful Resources</em>
                <span className="right icon-pos">
                  <FontAwesomeIcon icon={solid('chevron-down')} rotation={toggleUsefulResources ? 180 : 0} />
                </span>
              </h3>
            </header>
            <div className="grid-col-all line" />
            {
              toggleUsefulResources && (
                <div className="grid-col-all grid-list-3reg-3lrg-3mid-2sml projects-pos">
                  {displayProjects(data, "multimedia", "usefulresources")}
                </div>
              )
            }
          </section>
        </section>
        <ButtonArrow className="grid-wrapper-column center" onClick={artRef} />
      </MultimediaSectionStyle>
      <ArtSectionStyle id="art-and-graphic-design" className="grid section" ref={artRef}>
        <header className="grid-wrapper-column grid-col-center">
          <h1>Art & Graphic Design</h1>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>
              Specializing in Pointillism style, I am a self-taught Graphic Artist & Designer.
              It is a way of expressing myself, creativity and imagination.
              My mission is to bring divergent art, colors and stories into peoples' life.
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>Knowledge gained from my Multimedia Design education and my curiosity help me to create, develop, promote my own art and digital content.</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>Please check out my SoMe to find my artworks, videos and more.</h2>
          </AnimationOnScroll>
        </header>
        <div className="grid-col-all grid-col-center">
          <SoMe category="art" />
        </div>
        <ButtonArrow className="grid-col-all center" onClick={artExpoRef} />
      </ArtSectionStyle>
      <ArtExpoSectionStyle className="grid section" ref={artExpoRef}>
        <header className="grid-wrapper-column grid-col-center">
          <AnimationOnScroll animateIn="animate__fadeInTopLeft">
            <h1>
              Did you know that I made a 3D Virtual Pointillism Art Exhibition?
            </h1>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <h2>~Space and cosmos~</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUpBig">
            <ButtonRegular className="center" linkRef="https://www.artsteps.com/view/61f07e6fddeff1a8de09da74" btnMargin="20px auto" btnColor={buttonColor} btnHover="#0082cc" btnTextColor={whiteRegular} btnTextHoverColor={whiteRegular} btnText="Take a tour">
              <FontAwesomeIcon pull="right" icon={solid('rocket')} size="1x" />
            </ButtonRegular>
          </AnimationOnScroll>
        </header>
        <ButtonArrow className="grid-col-all grid-col-center center" onClick={aboutRef} />
      </ArtExpoSectionStyle>
      <AboutSectionStyle id="myself-and-reach" className="grid section" ref={aboutRef}>
        <header className="grid-wrapper-column grid-col-center">
          <h1>
            Who am I?
          </h1>
          <h2>Learn more about me, myself and I</h2>
        </header>
        <div className="grid-col-4-10">
          <p>
            My friends like to call me Mr. Whiskers, but my name is Ivan Stoyanov (Иван Стоянов).
            Born in 1995, I am originally from Bulgaria but live in Denmark since 2015.
            Cooking, baking, watching documentaries, kayaking, walking and hiking in nature are some of my hobbies.
            My interests in technology, sustainability, environmentalism, renewable energy and economics are making me more self-aware of what is happening around the world.
            Work-life balance is important for me and I strive everyday to become a better version of myself.
          </p>
          <p>
            As a constructive and open-minded person, I often find myself smiling a lot, bringing positive vibes and helping others.
            According to the 16 Personalities test, mine is INFP type but I disagree with being introverted.
            This is because I like to talk and engage into conversations, and hangout with people.
            Creativity and thinking out of the box are giving me the possibility to do things in different ways.
            My motivation, determination and positivity help me in facing challenges or working under pressure.
          </p>
          <p>
            I like to geek on various subjects like websites, electric cars, nature conservation, human behavior, music and more.
            Sometimes, I play board or PC games with my friends for fun. I am curious about Web3, Blockchain, NFTs, Stocks.
            How I relate Web Development with Graphic Design and Art, is that they are all based on creativity, logical and dynamic thinking, flexibility and continuous development.
            I am a fast and passionate learner. I do not like to leave my work unfinished and I value the quality over the quantity.
            I prefer to be consistent and to divide the work into small tasks, or to apply Design Thinking / SCRUM methods to make it more efficient.
          </p>
        </div>
        <div className="grid-wrapper-column">
          <ButtonRegular className="center" linkRef="https://drive.google.com/file/d/1_-nW8q7e2pk60kkg8cxR1u4MtUNR1QLC/view" btnMargin="20px auto" btnColor={whiteRegular} btnHover={buttonColor} btnTextColor="#000" btnTextHoverColor={whiteRegular} btnText="See my CV">
            <FontAwesomeIcon pull="right" icon={solid('user-ninja')} size="1x" />
          </ButtonRegular>
        </div>
        <h2 className="grid-wrapper-column">Reach out to me</h2>
        <div className="grid-wrapper-column">
          <SoMe category="reach" />
        </div>
      </AboutSectionStyle>
    </>
  );
};

export default MainPage;