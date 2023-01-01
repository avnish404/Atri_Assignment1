import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useAboutCb, useFlex4Cb, useFlex5Cb, useFlex6Cb, useFlex8Cb, useFlex9Cb, useFlex7Cb, useFlex10Cb, useTrustedByCb, useFlex11Cb, useFlex12Cb, useNavigationCb, useFlex1Cb, useFlex2Cb, useNavigationFlexCb, useFlex3Cb, useServicesCb, useFlex13Cb, useFlex14Cb, useFlex15Cb, useFlex17Cb, useFlex18Cb, useFlex16Cb, useProjectsCb, useFlex19Cb, useFlex20Cb, useFlex24Cb, useFlex28Cb, useFlex29Cb, useFlex30Cb, useFlex25Cb, useFlex26Cb, useFlex27Cb, useFlex254Cb, useFlex252Cb, useFlex253Cb, useFlex257Cb, useFlex255Cb, useFlex256Cb, useFlex21Cb, useFlex22Cb, useFlex23Cb, useProductsCb, useFlex54Cb, useFlex55Cb, useFlex56Cb, useFlex57Cb, useFlex58Cb, useFlex61Cb, useFlext59Cb, useFlex60Cb, useBlogsCb, useFlex36Cb, useFlex37Cb, useFlex38Cb, useFlex40Cb, useFlex51Cb, useFlex52Cb, useFlex53Cb, useFlex48Cb, useFlex49Cb, useFlex50Cb, useFlex46Cb, useFlex47Cb, useFlex126Cb, useFlex43Cb, useFlex44Cb, useFlex45Cb, useFlex41Cb, useFlex42Cb, useFlex128Cb, useFlex39Cb, useEducationAndExperienceCb, useFlex62Cb, useFlex63Cb, useFlex66Cb, useFlex73Cb, useFlex_ABCCb, useFlex74Cb, useFlex70Cb, useFlex_72Cb, useFlex71Cb, useFlex67Cb, useFlex68Cb, useFlex69Cb, useFlex64Cb, useFlex65Cb, useFlex_75Cb, useFlex76Cb, useFlex77Cb, useFlex88Cb, useFlex89Cb, useFlex91Cb, useFlex90Cb, useFlex92Cb, useFlex93Cb, useFlex94Cb, useFlex95Cb, useFlex96Cb, useFlex97Cb, useTestimonialsCb, useFlex98Cb, useFlex99Cb, useFlex102Cb, useFlex100Cb, useFlex_101Cb, useFlex103Cb, useFlex104Cb, useFlex105Cb, useFlex106Cb, useFooterCb, useFlex107Cb, useFlex108Cb, useFlex109Cb, useFlex110Cb, useFlex111Cb, useFlex112Cb, useFlex114Cb, useFlex113Cb, useFlex115Cb, useFlex119Cb, useFlex118Cb, useFlex117Cb, useFlex116Cb, useFlex120Cb, useFlex121Cb, useFlex122Cb, useFlex123Cb, useFlex124Cb, useFlex125Cb, useFlex_126Cb, useFlex127Cb, useFlex_128Cb, useFlex129Cb, useTextBox_5Cb, useTextBox_4Cb, useTextBox_6Cb, useTextBox_7Cb, useButton1Cb, useTextBox_8Cb, useTextBox_1Cb, useTextBox_2Cb, useTextBox_3Cb, useMyImageCb, useTextBox_10Cb, uselogo3Cb, uselogo1Cb, uselogo2Cb, uselogo4Cb, useMainLogoCb, useNav4Cb, useNav1Cb, useNav2Cb, useNav3Cb, useNav5Cb, useTextBox_11Cb, useTextBox_12Cb, useTextBox_13Cb, useImage_2Cb, useTextBox_21Cb, useTextBox_27Cb, useTextBox_22Cb, useTextBox_24Cb, useTextBox_26Cb, useTextBox_25Cb, useTextBox_23Cb, useTextBox_30Cb, useTextBox_32Cb, useTextBox_33Cb, useTextBox_31Cb, useTextBox_29Cb, useTextBox_34Cb, useTextBox_28Cb, useImage_3Cb, useTextBox_16Cb, useTextBox_18Cb, useTextBox_19Cb, useTextBox_17Cb, useTextBox_15Cb, useTextBox_20Cb, useTextBox_14Cb, useImage_1Cb, useProjImage2Cb, useTextBox_45Cb, useTextBox_46Cb, useTextBox_43Cb, useTextBox_44Cb, useProjImage1Cb, useTextBox_40Cb, useTextBox_42Cb, useTextBox_38Cb, useTextBox_39Cb, useTextBox_41Cb, useTextBox274Cb, useTextBox275Cb, useTextBox276Cb, useTextBox277Cb, useImage54Cb, useTextBox278Cb, useTextBox279Cb, useTextBox280Cb, useTextBox281Cb, useImage55Cb, useTextBox_37Cb, useTextBox_36Cb, useTextBox_35Cb, useButton2Cb, useTextBox_81Cb, useTextBox_82Cb, useTextBox_83Cb, useTextBox_85Cb, useTextBox_84Cb, useProdImage4Cb, useProdImage3Cb, useProdImage1Cb, useProdImage2Cb, useTextBox_56Cb, useTextBox_80Cb, useTextBox_79Cb, useTextBox_76Cb, useTextBox_77Cb, useTextBox_78Cb, useTextBox_75Cb, useTextBox_74Cb, useTextBox_71Cb, useTextBox_72Cb, useTextBox_73Cb, useTextBox_70Cb, useTextBox_69Cb, useTextBox165Cb, useTextBox157Cb, useTextBox158Cb, useTextBox_66Cb, useTextBox_67Cb, useTextBox_68Cb, useTextBox_63Cb, useTextBox_65Cb, useTextBox_64Cb, useTextBox_59Cb, useTextBox_60Cb, useTextBox_61Cb, useTextBox_62Cb, useTextBox161Cb, useTextBox162Cb, useTextBox_58Cb, useTextBox_57Cb, useTextBox_95Cb, useTextBox_94Cb, useTextBox_93Cb, useTextBox_92Cb, useTextBox_91Cb, useTextBox_90Cb, useTextBox_87Cb, useTextBox_88Cb, useTextBox_89Cb, useEducationImageCb, useTextBox_86Cb, useWorkImageCb, useTextBox_96Cb, useTextBox_99Cb, useTextBox_98Cb, useTextBox_97Cb, useTextBox_100Cb, useTextBox_101Cb, useTextBox_102Cb, useTextBox_103Cb, useTextBox_104Cb, useTextBox_105Cb, useImageCb, useTextBox_106Cb, useTextBox_107Cb, useInvertedCommCb, useTextBox_111Cb, useTextBox_110Cb, useTextBox_108Cb, useTextBox_109Cb, useTextBox_112Cb, useTextBox_113Cb, useTextBox_115Cb, useTextBox_114Cb, useImage5Cb, useTextBox_116Cb, useImage6Cb, useTextBox_117Cb, useImage8Cb, useTextBox_119Cb, useTextBox_118Cb, useImage7Cb, useTextBox_123Cb, useImage12Cb, useTextBox_122Cb, useImage11Cb, useTextBox_121Cb, useImage10Cb, useImage9Cb, useTextBox_120Cb, useTextBox_124Cb, useTextBox_125Cb, useTextBox_126Cb, useTextBox_127Cb, useImage13Cb, useTextBox_128Cb, useTextBox_129Cb, useTextBox_131Cb, useTextBox_130Cb, useTextBox_133Cb, useTextBox_134Cb, useTextBox_132Cb, useTextBox_136Cb, useTextBox_137Cb, useTextBox_135Cb, useImage14Cb, useTextBox_138Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const AboutProps = useStore((state)=>state["Home"]["About"]);
const AboutIoProps = useIoStore((state)=>state["Home"]["About"]);
const AboutCb = useAboutCb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Flex9Props = useStore((state)=>state["Home"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Home"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const TrustedByProps = useStore((state)=>state["Home"]["TrustedBy"]);
const TrustedByIoProps = useIoStore((state)=>state["Home"]["TrustedBy"]);
const TrustedByCb = useTrustedByCb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const NavigationProps = useStore((state)=>state["Home"]["Navigation"]);
const NavigationIoProps = useIoStore((state)=>state["Home"]["Navigation"]);
const NavigationCb = useNavigationCb()
const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const NavigationFlexProps = useStore((state)=>state["Home"]["NavigationFlex"]);
const NavigationFlexIoProps = useIoStore((state)=>state["Home"]["NavigationFlex"]);
const NavigationFlexCb = useNavigationFlexCb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const ServicesProps = useStore((state)=>state["Home"]["Services"]);
const ServicesIoProps = useIoStore((state)=>state["Home"]["Services"]);
const ServicesCb = useServicesCb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const ProjectsProps = useStore((state)=>state["Home"]["Projects"]);
const ProjectsIoProps = useIoStore((state)=>state["Home"]["Projects"]);
const ProjectsCb = useProjectsCb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex254Props = useStore((state)=>state["Home"]["Flex254"]);
const Flex254IoProps = useIoStore((state)=>state["Home"]["Flex254"]);
const Flex254Cb = useFlex254Cb()
const Flex252Props = useStore((state)=>state["Home"]["Flex252"]);
const Flex252IoProps = useIoStore((state)=>state["Home"]["Flex252"]);
const Flex252Cb = useFlex252Cb()
const Flex253Props = useStore((state)=>state["Home"]["Flex253"]);
const Flex253IoProps = useIoStore((state)=>state["Home"]["Flex253"]);
const Flex253Cb = useFlex253Cb()
const Flex257Props = useStore((state)=>state["Home"]["Flex257"]);
const Flex257IoProps = useIoStore((state)=>state["Home"]["Flex257"]);
const Flex257Cb = useFlex257Cb()
const Flex255Props = useStore((state)=>state["Home"]["Flex255"]);
const Flex255IoProps = useIoStore((state)=>state["Home"]["Flex255"]);
const Flex255Cb = useFlex255Cb()
const Flex256Props = useStore((state)=>state["Home"]["Flex256"]);
const Flex256IoProps = useIoStore((state)=>state["Home"]["Flex256"]);
const Flex256Cb = useFlex256Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const ProductsProps = useStore((state)=>state["Home"]["Products"]);
const ProductsIoProps = useIoStore((state)=>state["Home"]["Products"]);
const ProductsCb = useProductsCb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flext59Props = useStore((state)=>state["Home"]["Flext59"]);
const Flext59IoProps = useIoStore((state)=>state["Home"]["Flext59"]);
const Flext59Cb = useFlext59Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const BlogsProps = useStore((state)=>state["Home"]["Blogs"]);
const BlogsIoProps = useIoStore((state)=>state["Home"]["Blogs"]);
const BlogsCb = useBlogsCb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex42Props = useStore((state)=>state["Home"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const EducationAndExperienceProps = useStore((state)=>state["Home"]["EducationAndExperience"]);
const EducationAndExperienceIoProps = useIoStore((state)=>state["Home"]["EducationAndExperience"]);
const EducationAndExperienceCb = useEducationAndExperienceCb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Flex_ABCProps = useStore((state)=>state["Home"]["Flex_ABC"]);
const Flex_ABCIoProps = useIoStore((state)=>state["Home"]["Flex_ABC"]);
const Flex_ABCCb = useFlex_ABCCb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex_72Props = useStore((state)=>state["Home"]["Flex_72"]);
const Flex_72IoProps = useIoStore((state)=>state["Home"]["Flex_72"]);
const Flex_72Cb = useFlex_72Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex68Props = useStore((state)=>state["Home"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex_75Props = useStore((state)=>state["Home"]["Flex_75"]);
const Flex_75IoProps = useIoStore((state)=>state["Home"]["Flex_75"]);
const Flex_75Cb = useFlex_75Cb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex88Props = useStore((state)=>state["Home"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["Home"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Flex91Props = useStore((state)=>state["Home"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["Home"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const Flex90Props = useStore((state)=>state["Home"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["Home"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const Flex92Props = useStore((state)=>state["Home"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["Home"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Flex93Props = useStore((state)=>state["Home"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["Home"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const TestimonialsProps = useStore((state)=>state["Home"]["Testimonials"]);
const TestimonialsIoProps = useIoStore((state)=>state["Home"]["Testimonials"]);
const TestimonialsCb = useTestimonialsCb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex100Props = useStore((state)=>state["Home"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Home"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex_101Props = useStore((state)=>state["Home"]["Flex_101"]);
const Flex_101IoProps = useIoStore((state)=>state["Home"]["Flex_101"]);
const Flex_101Cb = useFlex_101Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex105Props = useStore((state)=>state["Home"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Home"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Flex106Props = useStore((state)=>state["Home"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Home"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const FooterProps = useStore((state)=>state["Home"]["Footer"]);
const FooterIoProps = useIoStore((state)=>state["Home"]["Footer"]);
const FooterCb = useFooterCb()
const Flex107Props = useStore((state)=>state["Home"]["Flex107"]);
const Flex107IoProps = useIoStore((state)=>state["Home"]["Flex107"]);
const Flex107Cb = useFlex107Cb()
const Flex108Props = useStore((state)=>state["Home"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Home"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Flex109Props = useStore((state)=>state["Home"]["Flex109"]);
const Flex109IoProps = useIoStore((state)=>state["Home"]["Flex109"]);
const Flex109Cb = useFlex109Cb()
const Flex110Props = useStore((state)=>state["Home"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Home"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const Flex111Props = useStore((state)=>state["Home"]["Flex111"]);
const Flex111IoProps = useIoStore((state)=>state["Home"]["Flex111"]);
const Flex111Cb = useFlex111Cb()
const Flex112Props = useStore((state)=>state["Home"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Home"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Flex114Props = useStore((state)=>state["Home"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Home"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Flex113Props = useStore((state)=>state["Home"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Home"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const Flex115Props = useStore((state)=>state["Home"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Home"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex122Props = useStore((state)=>state["Home"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["Home"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Flex124Props = useStore((state)=>state["Home"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["Home"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Flex125Props = useStore((state)=>state["Home"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["Home"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Flex_126Props = useStore((state)=>state["Home"]["Flex_126"]);
const Flex_126IoProps = useIoStore((state)=>state["Home"]["Flex_126"]);
const Flex_126Cb = useFlex_126Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Flex_128Props = useStore((state)=>state["Home"]["Flex_128"]);
const Flex_128IoProps = useIoStore((state)=>state["Home"]["Flex_128"]);
const Flex_128Cb = useFlex_128Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const TextBox_5Props = useStore((state)=>state["Home"]["TextBox_5"]);
const TextBox_5IoProps = useIoStore((state)=>state["Home"]["TextBox_5"]);
const TextBox_5Cb = useTextBox_5Cb()
const TextBox_4Props = useStore((state)=>state["Home"]["TextBox_4"]);
const TextBox_4IoProps = useIoStore((state)=>state["Home"]["TextBox_4"]);
const TextBox_4Cb = useTextBox_4Cb()
const TextBox_6Props = useStore((state)=>state["Home"]["TextBox_6"]);
const TextBox_6IoProps = useIoStore((state)=>state["Home"]["TextBox_6"]);
const TextBox_6Cb = useTextBox_6Cb()
const TextBox_7Props = useStore((state)=>state["Home"]["TextBox_7"]);
const TextBox_7IoProps = useIoStore((state)=>state["Home"]["TextBox_7"]);
const TextBox_7Cb = useTextBox_7Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const TextBox_8Props = useStore((state)=>state["Home"]["TextBox_8"]);
const TextBox_8IoProps = useIoStore((state)=>state["Home"]["TextBox_8"]);
const TextBox_8Cb = useTextBox_8Cb()
const TextBox_1Props = useStore((state)=>state["Home"]["TextBox_1"]);
const TextBox_1IoProps = useIoStore((state)=>state["Home"]["TextBox_1"]);
const TextBox_1Cb = useTextBox_1Cb()
const TextBox_2Props = useStore((state)=>state["Home"]["TextBox_2"]);
const TextBox_2IoProps = useIoStore((state)=>state["Home"]["TextBox_2"]);
const TextBox_2Cb = useTextBox_2Cb()
const TextBox_3Props = useStore((state)=>state["Home"]["TextBox_3"]);
const TextBox_3IoProps = useIoStore((state)=>state["Home"]["TextBox_3"]);
const TextBox_3Cb = useTextBox_3Cb()
const MyImageProps = useStore((state)=>state["Home"]["MyImage"]);
const MyImageIoProps = useIoStore((state)=>state["Home"]["MyImage"]);
const MyImageCb = useMyImageCb()
const TextBox_10Props = useStore((state)=>state["Home"]["TextBox_10"]);
const TextBox_10IoProps = useIoStore((state)=>state["Home"]["TextBox_10"]);
const TextBox_10Cb = useTextBox_10Cb()
const logo3Props = useStore((state)=>state["Home"]["logo3"]);
const logo3IoProps = useIoStore((state)=>state["Home"]["logo3"]);
const logo3Cb = uselogo3Cb()
const logo1Props = useStore((state)=>state["Home"]["logo1"]);
const logo1IoProps = useIoStore((state)=>state["Home"]["logo1"]);
const logo1Cb = uselogo1Cb()
const logo2Props = useStore((state)=>state["Home"]["logo2"]);
const logo2IoProps = useIoStore((state)=>state["Home"]["logo2"]);
const logo2Cb = uselogo2Cb()
const logo4Props = useStore((state)=>state["Home"]["logo4"]);
const logo4IoProps = useIoStore((state)=>state["Home"]["logo4"]);
const logo4Cb = uselogo4Cb()
const MainLogoProps = useStore((state)=>state["Home"]["MainLogo"]);
const MainLogoIoProps = useIoStore((state)=>state["Home"]["MainLogo"]);
const MainLogoCb = useMainLogoCb()
const Nav4Props = useStore((state)=>state["Home"]["Nav4"]);
const Nav4IoProps = useIoStore((state)=>state["Home"]["Nav4"]);
const Nav4Cb = useNav4Cb()
const Nav1Props = useStore((state)=>state["Home"]["Nav1"]);
const Nav1IoProps = useIoStore((state)=>state["Home"]["Nav1"]);
const Nav1Cb = useNav1Cb()
const Nav2Props = useStore((state)=>state["Home"]["Nav2"]);
const Nav2IoProps = useIoStore((state)=>state["Home"]["Nav2"]);
const Nav2Cb = useNav2Cb()
const Nav3Props = useStore((state)=>state["Home"]["Nav3"]);
const Nav3IoProps = useIoStore((state)=>state["Home"]["Nav3"]);
const Nav3Cb = useNav3Cb()
const Nav5Props = useStore((state)=>state["Home"]["Nav5"]);
const Nav5IoProps = useIoStore((state)=>state["Home"]["Nav5"]);
const Nav5Cb = useNav5Cb()
const TextBox_11Props = useStore((state)=>state["Home"]["TextBox_11"]);
const TextBox_11IoProps = useIoStore((state)=>state["Home"]["TextBox_11"]);
const TextBox_11Cb = useTextBox_11Cb()
const TextBox_12Props = useStore((state)=>state["Home"]["TextBox_12"]);
const TextBox_12IoProps = useIoStore((state)=>state["Home"]["TextBox_12"]);
const TextBox_12Cb = useTextBox_12Cb()
const TextBox_13Props = useStore((state)=>state["Home"]["TextBox_13"]);
const TextBox_13IoProps = useIoStore((state)=>state["Home"]["TextBox_13"]);
const TextBox_13Cb = useTextBox_13Cb()
const Image_2Props = useStore((state)=>state["Home"]["Image_2"]);
const Image_2IoProps = useIoStore((state)=>state["Home"]["Image_2"]);
const Image_2Cb = useImage_2Cb()
const TextBox_21Props = useStore((state)=>state["Home"]["TextBox_21"]);
const TextBox_21IoProps = useIoStore((state)=>state["Home"]["TextBox_21"]);
const TextBox_21Cb = useTextBox_21Cb()
const TextBox_27Props = useStore((state)=>state["Home"]["TextBox_27"]);
const TextBox_27IoProps = useIoStore((state)=>state["Home"]["TextBox_27"]);
const TextBox_27Cb = useTextBox_27Cb()
const TextBox_22Props = useStore((state)=>state["Home"]["TextBox_22"]);
const TextBox_22IoProps = useIoStore((state)=>state["Home"]["TextBox_22"]);
const TextBox_22Cb = useTextBox_22Cb()
const TextBox_24Props = useStore((state)=>state["Home"]["TextBox_24"]);
const TextBox_24IoProps = useIoStore((state)=>state["Home"]["TextBox_24"]);
const TextBox_24Cb = useTextBox_24Cb()
const TextBox_26Props = useStore((state)=>state["Home"]["TextBox_26"]);
const TextBox_26IoProps = useIoStore((state)=>state["Home"]["TextBox_26"]);
const TextBox_26Cb = useTextBox_26Cb()
const TextBox_25Props = useStore((state)=>state["Home"]["TextBox_25"]);
const TextBox_25IoProps = useIoStore((state)=>state["Home"]["TextBox_25"]);
const TextBox_25Cb = useTextBox_25Cb()
const TextBox_23Props = useStore((state)=>state["Home"]["TextBox_23"]);
const TextBox_23IoProps = useIoStore((state)=>state["Home"]["TextBox_23"]);
const TextBox_23Cb = useTextBox_23Cb()
const TextBox_30Props = useStore((state)=>state["Home"]["TextBox_30"]);
const TextBox_30IoProps = useIoStore((state)=>state["Home"]["TextBox_30"]);
const TextBox_30Cb = useTextBox_30Cb()
const TextBox_32Props = useStore((state)=>state["Home"]["TextBox_32"]);
const TextBox_32IoProps = useIoStore((state)=>state["Home"]["TextBox_32"]);
const TextBox_32Cb = useTextBox_32Cb()
const TextBox_33Props = useStore((state)=>state["Home"]["TextBox_33"]);
const TextBox_33IoProps = useIoStore((state)=>state["Home"]["TextBox_33"]);
const TextBox_33Cb = useTextBox_33Cb()
const TextBox_31Props = useStore((state)=>state["Home"]["TextBox_31"]);
const TextBox_31IoProps = useIoStore((state)=>state["Home"]["TextBox_31"]);
const TextBox_31Cb = useTextBox_31Cb()
const TextBox_29Props = useStore((state)=>state["Home"]["TextBox_29"]);
const TextBox_29IoProps = useIoStore((state)=>state["Home"]["TextBox_29"]);
const TextBox_29Cb = useTextBox_29Cb()
const TextBox_34Props = useStore((state)=>state["Home"]["TextBox_34"]);
const TextBox_34IoProps = useIoStore((state)=>state["Home"]["TextBox_34"]);
const TextBox_34Cb = useTextBox_34Cb()
const TextBox_28Props = useStore((state)=>state["Home"]["TextBox_28"]);
const TextBox_28IoProps = useIoStore((state)=>state["Home"]["TextBox_28"]);
const TextBox_28Cb = useTextBox_28Cb()
const Image_3Props = useStore((state)=>state["Home"]["Image_3"]);
const Image_3IoProps = useIoStore((state)=>state["Home"]["Image_3"]);
const Image_3Cb = useImage_3Cb()
const TextBox_16Props = useStore((state)=>state["Home"]["TextBox_16"]);
const TextBox_16IoProps = useIoStore((state)=>state["Home"]["TextBox_16"]);
const TextBox_16Cb = useTextBox_16Cb()
const TextBox_18Props = useStore((state)=>state["Home"]["TextBox_18"]);
const TextBox_18IoProps = useIoStore((state)=>state["Home"]["TextBox_18"]);
const TextBox_18Cb = useTextBox_18Cb()
const TextBox_19Props = useStore((state)=>state["Home"]["TextBox_19"]);
const TextBox_19IoProps = useIoStore((state)=>state["Home"]["TextBox_19"]);
const TextBox_19Cb = useTextBox_19Cb()
const TextBox_17Props = useStore((state)=>state["Home"]["TextBox_17"]);
const TextBox_17IoProps = useIoStore((state)=>state["Home"]["TextBox_17"]);
const TextBox_17Cb = useTextBox_17Cb()
const TextBox_15Props = useStore((state)=>state["Home"]["TextBox_15"]);
const TextBox_15IoProps = useIoStore((state)=>state["Home"]["TextBox_15"]);
const TextBox_15Cb = useTextBox_15Cb()
const TextBox_20Props = useStore((state)=>state["Home"]["TextBox_20"]);
const TextBox_20IoProps = useIoStore((state)=>state["Home"]["TextBox_20"]);
const TextBox_20Cb = useTextBox_20Cb()
const TextBox_14Props = useStore((state)=>state["Home"]["TextBox_14"]);
const TextBox_14IoProps = useIoStore((state)=>state["Home"]["TextBox_14"]);
const TextBox_14Cb = useTextBox_14Cb()
const Image_1Props = useStore((state)=>state["Home"]["Image_1"]);
const Image_1IoProps = useIoStore((state)=>state["Home"]["Image_1"]);
const Image_1Cb = useImage_1Cb()
const ProjImage2Props = useStore((state)=>state["Home"]["ProjImage2"]);
const ProjImage2IoProps = useIoStore((state)=>state["Home"]["ProjImage2"]);
const ProjImage2Cb = useProjImage2Cb()
const TextBox_45Props = useStore((state)=>state["Home"]["TextBox_45"]);
const TextBox_45IoProps = useIoStore((state)=>state["Home"]["TextBox_45"]);
const TextBox_45Cb = useTextBox_45Cb()
const TextBox_46Props = useStore((state)=>state["Home"]["TextBox_46"]);
const TextBox_46IoProps = useIoStore((state)=>state["Home"]["TextBox_46"]);
const TextBox_46Cb = useTextBox_46Cb()
const TextBox_43Props = useStore((state)=>state["Home"]["TextBox_43"]);
const TextBox_43IoProps = useIoStore((state)=>state["Home"]["TextBox_43"]);
const TextBox_43Cb = useTextBox_43Cb()
const TextBox_44Props = useStore((state)=>state["Home"]["TextBox_44"]);
const TextBox_44IoProps = useIoStore((state)=>state["Home"]["TextBox_44"]);
const TextBox_44Cb = useTextBox_44Cb()
const ProjImage1Props = useStore((state)=>state["Home"]["ProjImage1"]);
const ProjImage1IoProps = useIoStore((state)=>state["Home"]["ProjImage1"]);
const ProjImage1Cb = useProjImage1Cb()
const TextBox_40Props = useStore((state)=>state["Home"]["TextBox_40"]);
const TextBox_40IoProps = useIoStore((state)=>state["Home"]["TextBox_40"]);
const TextBox_40Cb = useTextBox_40Cb()
const TextBox_42Props = useStore((state)=>state["Home"]["TextBox_42"]);
const TextBox_42IoProps = useIoStore((state)=>state["Home"]["TextBox_42"]);
const TextBox_42Cb = useTextBox_42Cb()
const TextBox_38Props = useStore((state)=>state["Home"]["TextBox_38"]);
const TextBox_38IoProps = useIoStore((state)=>state["Home"]["TextBox_38"]);
const TextBox_38Cb = useTextBox_38Cb()
const TextBox_39Props = useStore((state)=>state["Home"]["TextBox_39"]);
const TextBox_39IoProps = useIoStore((state)=>state["Home"]["TextBox_39"]);
const TextBox_39Cb = useTextBox_39Cb()
const TextBox_41Props = useStore((state)=>state["Home"]["TextBox_41"]);
const TextBox_41IoProps = useIoStore((state)=>state["Home"]["TextBox_41"]);
const TextBox_41Cb = useTextBox_41Cb()
const TextBox274Props = useStore((state)=>state["Home"]["TextBox274"]);
const TextBox274IoProps = useIoStore((state)=>state["Home"]["TextBox274"]);
const TextBox274Cb = useTextBox274Cb()
const TextBox275Props = useStore((state)=>state["Home"]["TextBox275"]);
const TextBox275IoProps = useIoStore((state)=>state["Home"]["TextBox275"]);
const TextBox275Cb = useTextBox275Cb()
const TextBox276Props = useStore((state)=>state["Home"]["TextBox276"]);
const TextBox276IoProps = useIoStore((state)=>state["Home"]["TextBox276"]);
const TextBox276Cb = useTextBox276Cb()
const TextBox277Props = useStore((state)=>state["Home"]["TextBox277"]);
const TextBox277IoProps = useIoStore((state)=>state["Home"]["TextBox277"]);
const TextBox277Cb = useTextBox277Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const TextBox278Props = useStore((state)=>state["Home"]["TextBox278"]);
const TextBox278IoProps = useIoStore((state)=>state["Home"]["TextBox278"]);
const TextBox278Cb = useTextBox278Cb()
const TextBox279Props = useStore((state)=>state["Home"]["TextBox279"]);
const TextBox279IoProps = useIoStore((state)=>state["Home"]["TextBox279"]);
const TextBox279Cb = useTextBox279Cb()
const TextBox280Props = useStore((state)=>state["Home"]["TextBox280"]);
const TextBox280IoProps = useIoStore((state)=>state["Home"]["TextBox280"]);
const TextBox280Cb = useTextBox280Cb()
const TextBox281Props = useStore((state)=>state["Home"]["TextBox281"]);
const TextBox281IoProps = useIoStore((state)=>state["Home"]["TextBox281"]);
const TextBox281Cb = useTextBox281Cb()
const Image55Props = useStore((state)=>state["Home"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["Home"]["Image55"]);
const Image55Cb = useImage55Cb()
const TextBox_37Props = useStore((state)=>state["Home"]["TextBox_37"]);
const TextBox_37IoProps = useIoStore((state)=>state["Home"]["TextBox_37"]);
const TextBox_37Cb = useTextBox_37Cb()
const TextBox_36Props = useStore((state)=>state["Home"]["TextBox_36"]);
const TextBox_36IoProps = useIoStore((state)=>state["Home"]["TextBox_36"]);
const TextBox_36Cb = useTextBox_36Cb()
const TextBox_35Props = useStore((state)=>state["Home"]["TextBox_35"]);
const TextBox_35IoProps = useIoStore((state)=>state["Home"]["TextBox_35"]);
const TextBox_35Cb = useTextBox_35Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox_81Props = useStore((state)=>state["Home"]["TextBox_81"]);
const TextBox_81IoProps = useIoStore((state)=>state["Home"]["TextBox_81"]);
const TextBox_81Cb = useTextBox_81Cb()
const TextBox_82Props = useStore((state)=>state["Home"]["TextBox_82"]);
const TextBox_82IoProps = useIoStore((state)=>state["Home"]["TextBox_82"]);
const TextBox_82Cb = useTextBox_82Cb()
const TextBox_83Props = useStore((state)=>state["Home"]["TextBox_83"]);
const TextBox_83IoProps = useIoStore((state)=>state["Home"]["TextBox_83"]);
const TextBox_83Cb = useTextBox_83Cb()
const TextBox_85Props = useStore((state)=>state["Home"]["TextBox_85"]);
const TextBox_85IoProps = useIoStore((state)=>state["Home"]["TextBox_85"]);
const TextBox_85Cb = useTextBox_85Cb()
const TextBox_84Props = useStore((state)=>state["Home"]["TextBox_84"]);
const TextBox_84IoProps = useIoStore((state)=>state["Home"]["TextBox_84"]);
const TextBox_84Cb = useTextBox_84Cb()
const ProdImage4Props = useStore((state)=>state["Home"]["ProdImage4"]);
const ProdImage4IoProps = useIoStore((state)=>state["Home"]["ProdImage4"]);
const ProdImage4Cb = useProdImage4Cb()
const ProdImage3Props = useStore((state)=>state["Home"]["ProdImage3"]);
const ProdImage3IoProps = useIoStore((state)=>state["Home"]["ProdImage3"]);
const ProdImage3Cb = useProdImage3Cb()
const ProdImage1Props = useStore((state)=>state["Home"]["ProdImage1"]);
const ProdImage1IoProps = useIoStore((state)=>state["Home"]["ProdImage1"]);
const ProdImage1Cb = useProdImage1Cb()
const ProdImage2Props = useStore((state)=>state["Home"]["ProdImage2"]);
const ProdImage2IoProps = useIoStore((state)=>state["Home"]["ProdImage2"]);
const ProdImage2Cb = useProdImage2Cb()
const TextBox_56Props = useStore((state)=>state["Home"]["TextBox_56"]);
const TextBox_56IoProps = useIoStore((state)=>state["Home"]["TextBox_56"]);
const TextBox_56Cb = useTextBox_56Cb()
const TextBox_80Props = useStore((state)=>state["Home"]["TextBox_80"]);
const TextBox_80IoProps = useIoStore((state)=>state["Home"]["TextBox_80"]);
const TextBox_80Cb = useTextBox_80Cb()
const TextBox_79Props = useStore((state)=>state["Home"]["TextBox_79"]);
const TextBox_79IoProps = useIoStore((state)=>state["Home"]["TextBox_79"]);
const TextBox_79Cb = useTextBox_79Cb()
const TextBox_76Props = useStore((state)=>state["Home"]["TextBox_76"]);
const TextBox_76IoProps = useIoStore((state)=>state["Home"]["TextBox_76"]);
const TextBox_76Cb = useTextBox_76Cb()
const TextBox_77Props = useStore((state)=>state["Home"]["TextBox_77"]);
const TextBox_77IoProps = useIoStore((state)=>state["Home"]["TextBox_77"]);
const TextBox_77Cb = useTextBox_77Cb()
const TextBox_78Props = useStore((state)=>state["Home"]["TextBox_78"]);
const TextBox_78IoProps = useIoStore((state)=>state["Home"]["TextBox_78"]);
const TextBox_78Cb = useTextBox_78Cb()
const TextBox_75Props = useStore((state)=>state["Home"]["TextBox_75"]);
const TextBox_75IoProps = useIoStore((state)=>state["Home"]["TextBox_75"]);
const TextBox_75Cb = useTextBox_75Cb()
const TextBox_74Props = useStore((state)=>state["Home"]["TextBox_74"]);
const TextBox_74IoProps = useIoStore((state)=>state["Home"]["TextBox_74"]);
const TextBox_74Cb = useTextBox_74Cb()
const TextBox_71Props = useStore((state)=>state["Home"]["TextBox_71"]);
const TextBox_71IoProps = useIoStore((state)=>state["Home"]["TextBox_71"]);
const TextBox_71Cb = useTextBox_71Cb()
const TextBox_72Props = useStore((state)=>state["Home"]["TextBox_72"]);
const TextBox_72IoProps = useIoStore((state)=>state["Home"]["TextBox_72"]);
const TextBox_72Cb = useTextBox_72Cb()
const TextBox_73Props = useStore((state)=>state["Home"]["TextBox_73"]);
const TextBox_73IoProps = useIoStore((state)=>state["Home"]["TextBox_73"]);
const TextBox_73Cb = useTextBox_73Cb()
const TextBox_70Props = useStore((state)=>state["Home"]["TextBox_70"]);
const TextBox_70IoProps = useIoStore((state)=>state["Home"]["TextBox_70"]);
const TextBox_70Cb = useTextBox_70Cb()
const TextBox_69Props = useStore((state)=>state["Home"]["TextBox_69"]);
const TextBox_69IoProps = useIoStore((state)=>state["Home"]["TextBox_69"]);
const TextBox_69Cb = useTextBox_69Cb()
const TextBox165Props = useStore((state)=>state["Home"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["Home"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox157Props = useStore((state)=>state["Home"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["Home"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const TextBox158Props = useStore((state)=>state["Home"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["Home"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox_66Props = useStore((state)=>state["Home"]["TextBox_66"]);
const TextBox_66IoProps = useIoStore((state)=>state["Home"]["TextBox_66"]);
const TextBox_66Cb = useTextBox_66Cb()
const TextBox_67Props = useStore((state)=>state["Home"]["TextBox_67"]);
const TextBox_67IoProps = useIoStore((state)=>state["Home"]["TextBox_67"]);
const TextBox_67Cb = useTextBox_67Cb()
const TextBox_68Props = useStore((state)=>state["Home"]["TextBox_68"]);
const TextBox_68IoProps = useIoStore((state)=>state["Home"]["TextBox_68"]);
const TextBox_68Cb = useTextBox_68Cb()
const TextBox_63Props = useStore((state)=>state["Home"]["TextBox_63"]);
const TextBox_63IoProps = useIoStore((state)=>state["Home"]["TextBox_63"]);
const TextBox_63Cb = useTextBox_63Cb()
const TextBox_65Props = useStore((state)=>state["Home"]["TextBox_65"]);
const TextBox_65IoProps = useIoStore((state)=>state["Home"]["TextBox_65"]);
const TextBox_65Cb = useTextBox_65Cb()
const TextBox_64Props = useStore((state)=>state["Home"]["TextBox_64"]);
const TextBox_64IoProps = useIoStore((state)=>state["Home"]["TextBox_64"]);
const TextBox_64Cb = useTextBox_64Cb()
const TextBox_59Props = useStore((state)=>state["Home"]["TextBox_59"]);
const TextBox_59IoProps = useIoStore((state)=>state["Home"]["TextBox_59"]);
const TextBox_59Cb = useTextBox_59Cb()
const TextBox_60Props = useStore((state)=>state["Home"]["TextBox_60"]);
const TextBox_60IoProps = useIoStore((state)=>state["Home"]["TextBox_60"]);
const TextBox_60Cb = useTextBox_60Cb()
const TextBox_61Props = useStore((state)=>state["Home"]["TextBox_61"]);
const TextBox_61IoProps = useIoStore((state)=>state["Home"]["TextBox_61"]);
const TextBox_61Cb = useTextBox_61Cb()
const TextBox_62Props = useStore((state)=>state["Home"]["TextBox_62"]);
const TextBox_62IoProps = useIoStore((state)=>state["Home"]["TextBox_62"]);
const TextBox_62Cb = useTextBox_62Cb()
const TextBox161Props = useStore((state)=>state["Home"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Home"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox162Props = useStore((state)=>state["Home"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Home"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox_58Props = useStore((state)=>state["Home"]["TextBox_58"]);
const TextBox_58IoProps = useIoStore((state)=>state["Home"]["TextBox_58"]);
const TextBox_58Cb = useTextBox_58Cb()
const TextBox_57Props = useStore((state)=>state["Home"]["TextBox_57"]);
const TextBox_57IoProps = useIoStore((state)=>state["Home"]["TextBox_57"]);
const TextBox_57Cb = useTextBox_57Cb()
const TextBox_95Props = useStore((state)=>state["Home"]["TextBox_95"]);
const TextBox_95IoProps = useIoStore((state)=>state["Home"]["TextBox_95"]);
const TextBox_95Cb = useTextBox_95Cb()
const TextBox_94Props = useStore((state)=>state["Home"]["TextBox_94"]);
const TextBox_94IoProps = useIoStore((state)=>state["Home"]["TextBox_94"]);
const TextBox_94Cb = useTextBox_94Cb()
const TextBox_93Props = useStore((state)=>state["Home"]["TextBox_93"]);
const TextBox_93IoProps = useIoStore((state)=>state["Home"]["TextBox_93"]);
const TextBox_93Cb = useTextBox_93Cb()
const TextBox_92Props = useStore((state)=>state["Home"]["TextBox_92"]);
const TextBox_92IoProps = useIoStore((state)=>state["Home"]["TextBox_92"]);
const TextBox_92Cb = useTextBox_92Cb()
const TextBox_91Props = useStore((state)=>state["Home"]["TextBox_91"]);
const TextBox_91IoProps = useIoStore((state)=>state["Home"]["TextBox_91"]);
const TextBox_91Cb = useTextBox_91Cb()
const TextBox_90Props = useStore((state)=>state["Home"]["TextBox_90"]);
const TextBox_90IoProps = useIoStore((state)=>state["Home"]["TextBox_90"]);
const TextBox_90Cb = useTextBox_90Cb()
const TextBox_87Props = useStore((state)=>state["Home"]["TextBox_87"]);
const TextBox_87IoProps = useIoStore((state)=>state["Home"]["TextBox_87"]);
const TextBox_87Cb = useTextBox_87Cb()
const TextBox_88Props = useStore((state)=>state["Home"]["TextBox_88"]);
const TextBox_88IoProps = useIoStore((state)=>state["Home"]["TextBox_88"]);
const TextBox_88Cb = useTextBox_88Cb()
const TextBox_89Props = useStore((state)=>state["Home"]["TextBox_89"]);
const TextBox_89IoProps = useIoStore((state)=>state["Home"]["TextBox_89"]);
const TextBox_89Cb = useTextBox_89Cb()
const EducationImageProps = useStore((state)=>state["Home"]["EducationImage"]);
const EducationImageIoProps = useIoStore((state)=>state["Home"]["EducationImage"]);
const EducationImageCb = useEducationImageCb()
const TextBox_86Props = useStore((state)=>state["Home"]["TextBox_86"]);
const TextBox_86IoProps = useIoStore((state)=>state["Home"]["TextBox_86"]);
const TextBox_86Cb = useTextBox_86Cb()
const WorkImageProps = useStore((state)=>state["Home"]["WorkImage"]);
const WorkImageIoProps = useIoStore((state)=>state["Home"]["WorkImage"]);
const WorkImageCb = useWorkImageCb()
const TextBox_96Props = useStore((state)=>state["Home"]["TextBox_96"]);
const TextBox_96IoProps = useIoStore((state)=>state["Home"]["TextBox_96"]);
const TextBox_96Cb = useTextBox_96Cb()
const TextBox_99Props = useStore((state)=>state["Home"]["TextBox_99"]);
const TextBox_99IoProps = useIoStore((state)=>state["Home"]["TextBox_99"]);
const TextBox_99Cb = useTextBox_99Cb()
const TextBox_98Props = useStore((state)=>state["Home"]["TextBox_98"]);
const TextBox_98IoProps = useIoStore((state)=>state["Home"]["TextBox_98"]);
const TextBox_98Cb = useTextBox_98Cb()
const TextBox_97Props = useStore((state)=>state["Home"]["TextBox_97"]);
const TextBox_97IoProps = useIoStore((state)=>state["Home"]["TextBox_97"]);
const TextBox_97Cb = useTextBox_97Cb()
const TextBox_100Props = useStore((state)=>state["Home"]["TextBox_100"]);
const TextBox_100IoProps = useIoStore((state)=>state["Home"]["TextBox_100"]);
const TextBox_100Cb = useTextBox_100Cb()
const TextBox_101Props = useStore((state)=>state["Home"]["TextBox_101"]);
const TextBox_101IoProps = useIoStore((state)=>state["Home"]["TextBox_101"]);
const TextBox_101Cb = useTextBox_101Cb()
const TextBox_102Props = useStore((state)=>state["Home"]["TextBox_102"]);
const TextBox_102IoProps = useIoStore((state)=>state["Home"]["TextBox_102"]);
const TextBox_102Cb = useTextBox_102Cb()
const TextBox_103Props = useStore((state)=>state["Home"]["TextBox_103"]);
const TextBox_103IoProps = useIoStore((state)=>state["Home"]["TextBox_103"]);
const TextBox_103Cb = useTextBox_103Cb()
const TextBox_104Props = useStore((state)=>state["Home"]["TextBox_104"]);
const TextBox_104IoProps = useIoStore((state)=>state["Home"]["TextBox_104"]);
const TextBox_104Cb = useTextBox_104Cb()
const TextBox_105Props = useStore((state)=>state["Home"]["TextBox_105"]);
const TextBox_105IoProps = useIoStore((state)=>state["Home"]["TextBox_105"]);
const TextBox_105Cb = useTextBox_105Cb()
const ImageProps = useStore((state)=>state["Home"]["Image"]);
const ImageIoProps = useIoStore((state)=>state["Home"]["Image"]);
const ImageCb = useImageCb()
const TextBox_106Props = useStore((state)=>state["Home"]["TextBox_106"]);
const TextBox_106IoProps = useIoStore((state)=>state["Home"]["TextBox_106"]);
const TextBox_106Cb = useTextBox_106Cb()
const TextBox_107Props = useStore((state)=>state["Home"]["TextBox_107"]);
const TextBox_107IoProps = useIoStore((state)=>state["Home"]["TextBox_107"]);
const TextBox_107Cb = useTextBox_107Cb()
const InvertedCommProps = useStore((state)=>state["Home"]["InvertedComm"]);
const InvertedCommIoProps = useIoStore((state)=>state["Home"]["InvertedComm"]);
const InvertedCommCb = useInvertedCommCb()
const TextBox_111Props = useStore((state)=>state["Home"]["TextBox_111"]);
const TextBox_111IoProps = useIoStore((state)=>state["Home"]["TextBox_111"]);
const TextBox_111Cb = useTextBox_111Cb()
const TextBox_110Props = useStore((state)=>state["Home"]["TextBox_110"]);
const TextBox_110IoProps = useIoStore((state)=>state["Home"]["TextBox_110"]);
const TextBox_110Cb = useTextBox_110Cb()
const TextBox_108Props = useStore((state)=>state["Home"]["TextBox_108"]);
const TextBox_108IoProps = useIoStore((state)=>state["Home"]["TextBox_108"]);
const TextBox_108Cb = useTextBox_108Cb()
const TextBox_109Props = useStore((state)=>state["Home"]["TextBox_109"]);
const TextBox_109IoProps = useIoStore((state)=>state["Home"]["TextBox_109"]);
const TextBox_109Cb = useTextBox_109Cb()
const TextBox_112Props = useStore((state)=>state["Home"]["TextBox_112"]);
const TextBox_112IoProps = useIoStore((state)=>state["Home"]["TextBox_112"]);
const TextBox_112Cb = useTextBox_112Cb()
const TextBox_113Props = useStore((state)=>state["Home"]["TextBox_113"]);
const TextBox_113IoProps = useIoStore((state)=>state["Home"]["TextBox_113"]);
const TextBox_113Cb = useTextBox_113Cb()
const TextBox_115Props = useStore((state)=>state["Home"]["TextBox_115"]);
const TextBox_115IoProps = useIoStore((state)=>state["Home"]["TextBox_115"]);
const TextBox_115Cb = useTextBox_115Cb()
const TextBox_114Props = useStore((state)=>state["Home"]["TextBox_114"]);
const TextBox_114IoProps = useIoStore((state)=>state["Home"]["TextBox_114"]);
const TextBox_114Cb = useTextBox_114Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const TextBox_116Props = useStore((state)=>state["Home"]["TextBox_116"]);
const TextBox_116IoProps = useIoStore((state)=>state["Home"]["TextBox_116"]);
const TextBox_116Cb = useTextBox_116Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const TextBox_117Props = useStore((state)=>state["Home"]["TextBox_117"]);
const TextBox_117IoProps = useIoStore((state)=>state["Home"]["TextBox_117"]);
const TextBox_117Cb = useTextBox_117Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const TextBox_119Props = useStore((state)=>state["Home"]["TextBox_119"]);
const TextBox_119IoProps = useIoStore((state)=>state["Home"]["TextBox_119"]);
const TextBox_119Cb = useTextBox_119Cb()
const TextBox_118Props = useStore((state)=>state["Home"]["TextBox_118"]);
const TextBox_118IoProps = useIoStore((state)=>state["Home"]["TextBox_118"]);
const TextBox_118Cb = useTextBox_118Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const TextBox_123Props = useStore((state)=>state["Home"]["TextBox_123"]);
const TextBox_123IoProps = useIoStore((state)=>state["Home"]["TextBox_123"]);
const TextBox_123Cb = useTextBox_123Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const TextBox_122Props = useStore((state)=>state["Home"]["TextBox_122"]);
const TextBox_122IoProps = useIoStore((state)=>state["Home"]["TextBox_122"]);
const TextBox_122Cb = useTextBox_122Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const TextBox_121Props = useStore((state)=>state["Home"]["TextBox_121"]);
const TextBox_121IoProps = useIoStore((state)=>state["Home"]["TextBox_121"]);
const TextBox_121Cb = useTextBox_121Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox_120Props = useStore((state)=>state["Home"]["TextBox_120"]);
const TextBox_120IoProps = useIoStore((state)=>state["Home"]["TextBox_120"]);
const TextBox_120Cb = useTextBox_120Cb()
const TextBox_124Props = useStore((state)=>state["Home"]["TextBox_124"]);
const TextBox_124IoProps = useIoStore((state)=>state["Home"]["TextBox_124"]);
const TextBox_124Cb = useTextBox_124Cb()
const TextBox_125Props = useStore((state)=>state["Home"]["TextBox_125"]);
const TextBox_125IoProps = useIoStore((state)=>state["Home"]["TextBox_125"]);
const TextBox_125Cb = useTextBox_125Cb()
const TextBox_126Props = useStore((state)=>state["Home"]["TextBox_126"]);
const TextBox_126IoProps = useIoStore((state)=>state["Home"]["TextBox_126"]);
const TextBox_126Cb = useTextBox_126Cb()
const TextBox_127Props = useStore((state)=>state["Home"]["TextBox_127"]);
const TextBox_127IoProps = useIoStore((state)=>state["Home"]["TextBox_127"]);
const TextBox_127Cb = useTextBox_127Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox_128Props = useStore((state)=>state["Home"]["TextBox_128"]);
const TextBox_128IoProps = useIoStore((state)=>state["Home"]["TextBox_128"]);
const TextBox_128Cb = useTextBox_128Cb()
const TextBox_129Props = useStore((state)=>state["Home"]["TextBox_129"]);
const TextBox_129IoProps = useIoStore((state)=>state["Home"]["TextBox_129"]);
const TextBox_129Cb = useTextBox_129Cb()
const TextBox_131Props = useStore((state)=>state["Home"]["TextBox_131"]);
const TextBox_131IoProps = useIoStore((state)=>state["Home"]["TextBox_131"]);
const TextBox_131Cb = useTextBox_131Cb()
const TextBox_130Props = useStore((state)=>state["Home"]["TextBox_130"]);
const TextBox_130IoProps = useIoStore((state)=>state["Home"]["TextBox_130"]);
const TextBox_130Cb = useTextBox_130Cb()
const TextBox_133Props = useStore((state)=>state["Home"]["TextBox_133"]);
const TextBox_133IoProps = useIoStore((state)=>state["Home"]["TextBox_133"]);
const TextBox_133Cb = useTextBox_133Cb()
const TextBox_134Props = useStore((state)=>state["Home"]["TextBox_134"]);
const TextBox_134IoProps = useIoStore((state)=>state["Home"]["TextBox_134"]);
const TextBox_134Cb = useTextBox_134Cb()
const TextBox_132Props = useStore((state)=>state["Home"]["TextBox_132"]);
const TextBox_132IoProps = useIoStore((state)=>state["Home"]["TextBox_132"]);
const TextBox_132Cb = useTextBox_132Cb()
const TextBox_136Props = useStore((state)=>state["Home"]["TextBox_136"]);
const TextBox_136IoProps = useIoStore((state)=>state["Home"]["TextBox_136"]);
const TextBox_136Cb = useTextBox_136Cb()
const TextBox_137Props = useStore((state)=>state["Home"]["TextBox_137"]);
const TextBox_137IoProps = useIoStore((state)=>state["Home"]["TextBox_137"]);
const TextBox_137Cb = useTextBox_137Cb()
const TextBox_135Props = useStore((state)=>state["Home"]["TextBox_135"]);
const TextBox_135IoProps = useIoStore((state)=>state["Home"]["TextBox_135"]);
const TextBox_135Cb = useTextBox_135Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox_138Props = useStore((state)=>state["Home"]["TextBox_138"]);
const TextBox_138IoProps = useIoStore((state)=>state["Home"]["TextBox_138"]);
const TextBox_138Cb = useTextBox_138Cb()

  return (<>
  <Flex className="p-Home Navigation bpt" {...NavigationProps} {...NavigationCb} {...NavigationIoProps}>
<Flex className="p-Home Flex1 bpt" {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<Flex className="p-Home Flex2 bpt" {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<TextBox className="p-Home MainLogo bpt" {...MainLogoProps} {...MainLogoCb} {...MainLogoIoProps}/>
</Flex>
<Flex className="p-Home NavigationFlex bpt" {...NavigationFlexProps} {...NavigationFlexCb} {...NavigationFlexIoProps}>
<TextBox className="p-Home Nav1 bpt" {...Nav1Props} {...Nav1Cb} {...Nav1IoProps}/>
<TextBox className="p-Home Nav2 bpt" {...Nav2Props} {...Nav2Cb} {...Nav2IoProps}/>
<TextBox className="p-Home Nav3 bpt" {...Nav3Props} {...Nav3Cb} {...Nav3IoProps}/>
<TextBox className="p-Home Nav4 bpt" {...Nav4Props} {...Nav4Cb} {...Nav4IoProps}/>
<Flex className="p-Home Flex3 bpt" {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<TextBox className="p-Home Nav5 bpt" {...Nav5Props} {...Nav5Cb} {...Nav5IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home About bpt" {...AboutProps} {...AboutCb} {...AboutIoProps}>
<Flex className="p-Home Flex4 bpt" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Flex className="p-Home Flex5 bpt" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<Flex className="p-Home Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Flex className="p-Home Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<TextBox className="p-Home TextBox_1 bpt" {...TextBox_1Props} {...TextBox_1Cb} {...TextBox_1IoProps}/>
<TextBox className="p-Home TextBox_2 bpt" {...TextBox_2Props} {...TextBox_2Cb} {...TextBox_2IoProps}/>
<TextBox className="p-Home TextBox_3 bpt" {...TextBox_3Props} {...TextBox_3Cb} {...TextBox_3IoProps}/>
</Flex>
<TextBox className="p-Home TextBox_4 bpt" {...TextBox_4Props} {...TextBox_4Cb} {...TextBox_4IoProps}/>
<TextBox className="p-Home TextBox_5 bpt" {...TextBox_5Props} {...TextBox_5Cb} {...TextBox_5IoProps}/>
<TextBox className="p-Home TextBox_6 bpt" {...TextBox_6Props} {...TextBox_6Cb} {...TextBox_6IoProps}/>
<TextBox className="p-Home TextBox_7 bpt" {...TextBox_7Props} {...TextBox_7Cb} {...TextBox_7IoProps}/>
<Flex className="p-Home Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
<Flex className="p-Home Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<TextBox className="p-Home TextBox_8 bpt" {...TextBox_8Props} {...TextBox_8Cb} {...TextBox_8IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Image className="p-Home MyImage bpt" {...MyImageProps} {...MyImageCb} {...MyImageIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home TrustedBy bpt" {...TrustedByProps} {...TrustedByCb} {...TrustedByIoProps}>
<Flex className="p-Home Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<TextBox className="p-Home TextBox_10 bpt" {...TextBox_10Props} {...TextBox_10Cb} {...TextBox_10IoProps}/>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Image className="p-Home logo1 bpt" {...logo1Props} {...logo1Cb} {...logo1IoProps}/>
<Image className="p-Home logo2 bpt" {...logo2Props} {...logo2Cb} {...logo2IoProps}/>
<Image className="p-Home logo3 bpt" {...logo3Props} {...logo3Cb} {...logo3IoProps}/>
<Image className="p-Home logo4 bpt" {...logo4Props} {...logo4Cb} {...logo4IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Services bpt" {...ServicesProps} {...ServicesCb} {...ServicesIoProps}>
<Flex className="p-Home Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<TextBox className="p-Home TextBox_11 bpt" {...TextBox_11Props} {...TextBox_11Cb} {...TextBox_11IoProps}/>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<TextBox className="p-Home TextBox_12 bpt" {...TextBox_12Props} {...TextBox_12Cb} {...TextBox_12IoProps}/>
<TextBox className="p-Home TextBox_13 bpt" {...TextBox_13Props} {...TextBox_13Cb} {...TextBox_13IoProps}/>
</Flex>
<Flex className="p-Home Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Image className="p-Home Image_1 bpt" {...Image_1Props} {...Image_1Cb} {...Image_1IoProps}/>
<TextBox className="p-Home TextBox_14 bpt" {...TextBox_14Props} {...TextBox_14Cb} {...TextBox_14IoProps}/>
<TextBox className="p-Home TextBox_15 bpt" {...TextBox_15Props} {...TextBox_15Cb} {...TextBox_15IoProps}/>
<TextBox className="p-Home TextBox_16 bpt" {...TextBox_16Props} {...TextBox_16Cb} {...TextBox_16IoProps}/>
<TextBox className="p-Home TextBox_17 bpt" {...TextBox_17Props} {...TextBox_17Cb} {...TextBox_17IoProps}/>
<TextBox className="p-Home TextBox_18 bpt" {...TextBox_18Props} {...TextBox_18Cb} {...TextBox_18IoProps}/>
<TextBox className="p-Home TextBox_19 bpt" {...TextBox_19Props} {...TextBox_19Cb} {...TextBox_19IoProps}/>
<TextBox className="p-Home TextBox_20 bpt" {...TextBox_20Props} {...TextBox_20Cb} {...TextBox_20IoProps}/>
</Flex>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Image className="p-Home Image_2 bpt" {...Image_2Props} {...Image_2Cb} {...Image_2IoProps}/>
<TextBox className="p-Home TextBox_21 bpt" {...TextBox_21Props} {...TextBox_21Cb} {...TextBox_21IoProps}/>
<TextBox className="p-Home TextBox_22 bpt" {...TextBox_22Props} {...TextBox_22Cb} {...TextBox_22IoProps}/>
<TextBox className="p-Home TextBox_23 bpt" {...TextBox_23Props} {...TextBox_23Cb} {...TextBox_23IoProps}/>
<TextBox className="p-Home TextBox_24 bpt" {...TextBox_24Props} {...TextBox_24Cb} {...TextBox_24IoProps}/>
<TextBox className="p-Home TextBox_25 bpt" {...TextBox_25Props} {...TextBox_25Cb} {...TextBox_25IoProps}/>
<TextBox className="p-Home TextBox_26 bpt" {...TextBox_26Props} {...TextBox_26Cb} {...TextBox_26IoProps}/>
<TextBox className="p-Home TextBox_27 bpt" {...TextBox_27Props} {...TextBox_27Cb} {...TextBox_27IoProps}/>
</Flex>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Image className="p-Home Image_3 bpt" {...Image_3Props} {...Image_3Cb} {...Image_3IoProps}/>
<TextBox className="p-Home TextBox_28 bpt" {...TextBox_28Props} {...TextBox_28Cb} {...TextBox_28IoProps}/>
<TextBox className="p-Home TextBox_29 bpt" {...TextBox_29Props} {...TextBox_29Cb} {...TextBox_29IoProps}/>
<TextBox className="p-Home TextBox_30 bpt" {...TextBox_30Props} {...TextBox_30Cb} {...TextBox_30IoProps}/>
<TextBox className="p-Home TextBox_31 bpt" {...TextBox_31Props} {...TextBox_31Cb} {...TextBox_31IoProps}/>
<TextBox className="p-Home TextBox_32 bpt" {...TextBox_32Props} {...TextBox_32Cb} {...TextBox_32IoProps}/>
<TextBox className="p-Home TextBox_33 bpt" {...TextBox_33Props} {...TextBox_33Cb} {...TextBox_33IoProps}/>
<TextBox className="p-Home TextBox_34 bpt" {...TextBox_34Props} {...TextBox_34Cb} {...TextBox_34IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Projects bpt" {...ProjectsProps} {...ProjectsCb} {...ProjectsIoProps}>
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Flex className="p-Home Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Flex className="p-Home Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Flex className="p-Home Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<TextBox className="p-Home TextBox_35 bpt" {...TextBox_35Props} {...TextBox_35Cb} {...TextBox_35IoProps}/>
<TextBox className="p-Home TextBox_36 bpt" {...TextBox_36Props} {...TextBox_36Cb} {...TextBox_36IoProps}/>
<TextBox className="p-Home TextBox_37 bpt" {...TextBox_37Props} {...TextBox_37Cb} {...TextBox_37IoProps}/>
</Flex>
<Flex className="p-Home Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Flex className="p-Home Flex257 bpt" {...Flex257Props} {...Flex257Cb} {...Flex257IoProps}>
<Flex className="p-Home Flex256 bpt" {...Flex256Props} {...Flex256Cb} {...Flex256IoProps}>
<Image className="p-Home Image55 bpt" {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
</Flex>
<Flex className="p-Home Flex255 bpt" {...Flex255Props} {...Flex255Cb} {...Flex255IoProps}>
<TextBox className="p-Home TextBox280 bpt" {...TextBox280Props} {...TextBox280Cb} {...TextBox280IoProps}/>
<TextBox className="p-Home TextBox279 bpt" {...TextBox279Props} {...TextBox279Cb} {...TextBox279IoProps}/>
<TextBox className="p-Home TextBox278 bpt" {...TextBox278Props} {...TextBox278Cb} {...TextBox278IoProps}/>
<TextBox className="p-Home TextBox281 bpt" {...TextBox281Props} {...TextBox281Cb} {...TextBox281IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex254 bpt" {...Flex254Props} {...Flex254Cb} {...Flex254IoProps}>
<Flex className="p-Home Flex253 bpt" {...Flex253Props} {...Flex253Cb} {...Flex253IoProps}>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
</Flex>
<Flex className="p-Home Flex252 bpt" {...Flex252Props} {...Flex252Cb} {...Flex252IoProps}>
<TextBox className="p-Home TextBox276 bpt" {...TextBox276Props} {...TextBox276Cb} {...TextBox276IoProps}/>
<TextBox className="p-Home TextBox275 bpt" {...TextBox275Props} {...TextBox275Cb} {...TextBox275IoProps}/>
<TextBox className="p-Home TextBox274 bpt" {...TextBox274Props} {...TextBox274Cb} {...TextBox274IoProps}/>
<TextBox className="p-Home TextBox277 bpt" {...TextBox277Props} {...TextBox277Cb} {...TextBox277IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Image className="p-Home ProjImage1 bpt" {...ProjImage1Props} {...ProjImage1Cb} {...ProjImage1IoProps}/>
</Flex>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<TextBox className="p-Home TextBox_38 bpt" {...TextBox_38Props} {...TextBox_38Cb} {...TextBox_38IoProps}/>
<TextBox className="p-Home TextBox_39 bpt" {...TextBox_39Props} {...TextBox_39Cb} {...TextBox_39IoProps}/>
<TextBox className="p-Home TextBox_40 bpt" {...TextBox_40Props} {...TextBox_40Cb} {...TextBox_40IoProps}/>
<TextBox className="p-Home TextBox_41 bpt" {...TextBox_41Props} {...TextBox_41Cb} {...TextBox_41IoProps}/>
<TextBox className="p-Home TextBox_42 bpt" {...TextBox_42Props} {...TextBox_42Cb} {...TextBox_42IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Flex className="p-Home Flex29 bpt" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<Image className="p-Home ProjImage2 bpt" {...ProjImage2Props} {...ProjImage2Cb} {...ProjImage2IoProps}/>
</Flex>
<Flex className="p-Home Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<TextBox className="p-Home TextBox_43 bpt" {...TextBox_43Props} {...TextBox_43Cb} {...TextBox_43IoProps}/>
<TextBox className="p-Home TextBox_44 bpt" {...TextBox_44Props} {...TextBox_44Cb} {...TextBox_44IoProps}/>
<TextBox className="p-Home TextBox_45 bpt" {...TextBox_45Props} {...TextBox_45Cb} {...TextBox_45IoProps}/>
<TextBox className="p-Home TextBox_46 bpt" {...TextBox_46Props} {...TextBox_46Cb} {...TextBox_46IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Blogs bpt" {...BlogsProps} {...BlogsCb} {...BlogsIoProps}>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Flex className="p-Home Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<TextBox className="p-Home TextBox_56 bpt" {...TextBox_56Props} {...TextBox_56Cb} {...TextBox_56IoProps}/>
</Flex>
<Flex className="p-Home Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<TextBox className="p-Home TextBox_57 bpt" {...TextBox_57Props} {...TextBox_57Cb} {...TextBox_57IoProps}/>
<TextBox className="p-Home TextBox_58 bpt" {...TextBox_58Props} {...TextBox_58Cb} {...TextBox_58IoProps}/>
</Flex>
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Flex className="p-Home Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Flex className="p-Home Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<TextBox className="p-Home TextBox_62 bpt" {...TextBox_62Props} {...TextBox_62Cb} {...TextBox_62IoProps}/>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<TextBox className="p-Home TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox className="p-Home TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox_59 bpt" {...TextBox_59Props} {...TextBox_59Cb} {...TextBox_59IoProps}/>
<TextBox className="p-Home TextBox_60 bpt" {...TextBox_60Props} {...TextBox_60Cb} {...TextBox_60IoProps}/>
<TextBox className="p-Home TextBox_61 bpt" {...TextBox_61Props} {...TextBox_61Cb} {...TextBox_61IoProps}/>
</Flex>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<TextBox className="p-Home TextBox_63 bpt" {...TextBox_63Props} {...TextBox_63Cb} {...TextBox_63IoProps}/>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<TextBox className="p-Home TextBox_64 bpt" {...TextBox_64Props} {...TextBox_64Cb} {...TextBox_64IoProps}/>
<TextBox className="p-Home TextBox_65 bpt" {...TextBox_65Props} {...TextBox_65Cb} {...TextBox_65IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox_66 bpt" {...TextBox_66Props} {...TextBox_66Cb} {...TextBox_66IoProps}/>
<TextBox className="p-Home TextBox_67 bpt" {...TextBox_67Props} {...TextBox_67Cb} {...TextBox_67IoProps}/>
<TextBox className="p-Home TextBox_68 bpt" {...TextBox_68Props} {...TextBox_68Cb} {...TextBox_68IoProps}/>
</Flex>
<Flex className="p-Home Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<TextBox className="p-Home TextBox165 bpt" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<TextBox className="p-Home TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
<TextBox className="p-Home TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox_69 bpt" {...TextBox_69Props} {...TextBox_69Cb} {...TextBox_69IoProps}/>
<TextBox className="p-Home TextBox_70 bpt" {...TextBox_70Props} {...TextBox_70Cb} {...TextBox_70IoProps}/>
</Flex>
<Flex className="p-Home Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox className="p-Home TextBox_71 bpt" {...TextBox_71Props} {...TextBox_71Cb} {...TextBox_71IoProps}/>
<Flex className="p-Home Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<TextBox className="p-Home TextBox_72 bpt" {...TextBox_72Props} {...TextBox_72Cb} {...TextBox_72IoProps}/>
<TextBox className="p-Home TextBox_73 bpt" {...TextBox_73Props} {...TextBox_73Cb} {...TextBox_73IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox_74 bpt" {...TextBox_74Props} {...TextBox_74Cb} {...TextBox_74IoProps}/>
<TextBox className="p-Home TextBox_75 bpt" {...TextBox_75Props} {...TextBox_75Cb} {...TextBox_75IoProps}/>
</Flex>
<Flex className="p-Home Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Flex className="p-Home Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<TextBox className="p-Home TextBox_76 bpt" {...TextBox_76Props} {...TextBox_76Cb} {...TextBox_76IoProps}/>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<TextBox className="p-Home TextBox_77 bpt" {...TextBox_77Props} {...TextBox_77Cb} {...TextBox_77IoProps}/>
<TextBox className="p-Home TextBox_78 bpt" {...TextBox_78Props} {...TextBox_78Cb} {...TextBox_78IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox_79 bpt" {...TextBox_79Props} {...TextBox_79Cb} {...TextBox_79IoProps}/>
<TextBox className="p-Home TextBox_80 bpt" {...TextBox_80Props} {...TextBox_80Cb} {...TextBox_80IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Products bpt" {...ProductsProps} {...ProductsCb} {...ProductsIoProps}>
<Flex className="p-Home Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Flex className="p-Home Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Flex className="p-Home Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<TextBox className="p-Home TextBox_81 bpt" {...TextBox_81Props} {...TextBox_81Cb} {...TextBox_81IoProps}/>
<TextBox className="p-Home TextBox_82 bpt" {...TextBox_82Props} {...TextBox_82Cb} {...TextBox_82IoProps}/>
</Flex>
<Flex className="p-Home Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<TextBox className="p-Home TextBox_83 bpt" {...TextBox_83Props} {...TextBox_83Cb} {...TextBox_83IoProps}/>
<TextBox className="p-Home TextBox_84 bpt" {...TextBox_84Props} {...TextBox_84Cb} {...TextBox_84IoProps}/>
<TextBox className="p-Home TextBox_85 bpt" {...TextBox_85Props} {...TextBox_85Cb} {...TextBox_85IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Flex className="p-Home Flext59 bpt" {...Flext59Props} {...Flext59Cb} {...Flext59IoProps}>
<Image className="p-Home ProdImage1 bpt" {...ProdImage1Props} {...ProdImage1Cb} {...ProdImage1IoProps}/>
</Flex>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Image className="p-Home ProdImage2 bpt" {...ProdImage2Props} {...ProdImage2Cb} {...ProdImage2IoProps}/>
</Flex>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Image className="p-Home ProdImage3 bpt" {...ProdImage3Props} {...ProdImage3Cb} {...ProdImage3IoProps}/>
<Image className="p-Home ProdImage4 bpt" {...ProdImage4Props} {...ProdImage4Cb} {...ProdImage4IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home EducationAndExperience bpt" {...EducationAndExperienceProps} {...EducationAndExperienceCb} {...EducationAndExperienceIoProps}>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Image className="p-Home EducationImage bpt" {...EducationImageProps} {...EducationImageCb} {...EducationImageIoProps}/>
<Flex className="p-Home Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<TextBox className="p-Home TextBox_86 bpt" {...TextBox_86Props} {...TextBox_86Cb} {...TextBox_86IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Flex className="p-Home Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Flex className="p-Home Flex68 bpt" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<TextBox className="p-Home TextBox_87 bpt" {...TextBox_87Props} {...TextBox_87Cb} {...TextBox_87IoProps}/>
<TextBox className="p-Home TextBox_88 bpt" {...TextBox_88Props} {...TextBox_88Cb} {...TextBox_88IoProps}/>
</Flex>
<Flex className="p-Home Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<TextBox className="p-Home TextBox_89 bpt" {...TextBox_89Props} {...TextBox_89Cb} {...TextBox_89IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Flex className="p-Home Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<TextBox className="p-Home TextBox_90 bpt" {...TextBox_90Props} {...TextBox_90Cb} {...TextBox_90IoProps}/>
<TextBox className="p-Home TextBox_91 bpt" {...TextBox_91Props} {...TextBox_91Cb} {...TextBox_91IoProps}/>
</Flex>
<Flex className="p-Home Flex_72 bpt" {...Flex_72Props} {...Flex_72Cb} {...Flex_72IoProps}>
<TextBox className="p-Home TextBox_92 bpt" {...TextBox_92Props} {...TextBox_92Cb} {...TextBox_92IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<TextBox className="p-Home TextBox_93 bpt" {...TextBox_93Props} {...TextBox_93Cb} {...TextBox_93IoProps}/>
<TextBox className="p-Home TextBox_94 bpt" {...TextBox_94Props} {...TextBox_94Cb} {...TextBox_94IoProps}/>
</Flex>
<Flex className="p-Home Flex_ABC bpt" {...Flex_ABCProps} {...Flex_ABCCb} {...Flex_ABCIoProps}>
<TextBox className="p-Home TextBox_95 bpt" {...TextBox_95Props} {...TextBox_95Cb} {...TextBox_95IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex_75 bpt" {...Flex_75Props} {...Flex_75Cb} {...Flex_75IoProps}>
<Flex className="p-Home Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Image className="p-Home WorkImage bpt" {...WorkImageProps} {...WorkImageCb} {...WorkImageIoProps}/>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<TextBox className="p-Home TextBox_96 bpt" {...TextBox_96Props} {...TextBox_96Cb} {...TextBox_96IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex88 bpt" {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<Flex className="p-Home Flex90 bpt" {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<TextBox className="p-Home TextBox_97 bpt" {...TextBox_97Props} {...TextBox_97Cb} {...TextBox_97IoProps}/>
<TextBox className="p-Home TextBox_98 bpt" {...TextBox_98Props} {...TextBox_98Cb} {...TextBox_98IoProps}/>
</Flex>
<Flex className="p-Home Flex91 bpt" {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<TextBox className="p-Home TextBox_99 bpt" {...TextBox_99Props} {...TextBox_99Cb} {...TextBox_99IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Flex className="p-Home Flex93 bpt" {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<TextBox className="p-Home TextBox_100 bpt" {...TextBox_100Props} {...TextBox_100Cb} {...TextBox_100IoProps}/>
<TextBox className="p-Home TextBox_101 bpt" {...TextBox_101Props} {...TextBox_101Cb} {...TextBox_101IoProps}/>
</Flex>
<Flex className="p-Home Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<TextBox className="p-Home TextBox_102 bpt" {...TextBox_102Props} {...TextBox_102Cb} {...TextBox_102IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<TextBox className="p-Home TextBox_103 bpt" {...TextBox_103Props} {...TextBox_103Cb} {...TextBox_103IoProps}/>
<TextBox className="p-Home TextBox_104 bpt" {...TextBox_104Props} {...TextBox_104Cb} {...TextBox_104IoProps}/>
</Flex>
<Flex className="p-Home Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<TextBox className="p-Home TextBox_105 bpt" {...TextBox_105Props} {...TextBox_105Cb} {...TextBox_105IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Testimonials bpt" {...TestimonialsProps} {...TestimonialsCb} {...TestimonialsIoProps}>
<Flex className="p-Home Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<Flex className="p-Home Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Flex className="p-Home Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<TextBox className="p-Home TextBox_106 bpt" {...TextBox_106Props} {...TextBox_106Cb} {...TextBox_106IoProps}/>
</Flex>
<Flex className="p-Home Flex_101 bpt" {...Flex_101Props} {...Flex_101Cb} {...Flex_101IoProps}>
<TextBox className="p-Home TextBox_107 bpt" {...TextBox_107Props} {...TextBox_107Cb} {...TextBox_107IoProps}/>
</Flex>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<Image className="p-Home Image bpt" {...ImageProps} {...ImageCb} {...ImageIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<Flex className="p-Home Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<Image className="p-Home InvertedComm bpt" {...InvertedCommProps} {...InvertedCommCb} {...InvertedCommIoProps}/>
</Flex>
<Flex className="p-Home Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<TextBox className="p-Home TextBox_108 bpt" {...TextBox_108Props} {...TextBox_108Cb} {...TextBox_108IoProps}/>
<TextBox className="p-Home TextBox_109 bpt" {...TextBox_109Props} {...TextBox_109Cb} {...TextBox_109IoProps}/>
<TextBox className="p-Home TextBox_110 bpt" {...TextBox_110Props} {...TextBox_110Cb} {...TextBox_110IoProps}/>
<TextBox className="p-Home TextBox_111 bpt" {...TextBox_111Props} {...TextBox_111Cb} {...TextBox_111IoProps}/>
</Flex>
<Flex className="p-Home Flex106 bpt" {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<TextBox className="p-Home TextBox_112 bpt" {...TextBox_112Props} {...TextBox_112Cb} {...TextBox_112IoProps}/>
<TextBox className="p-Home TextBox_113 bpt" {...TextBox_113Props} {...TextBox_113Cb} {...TextBox_113IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Footer bpt" {...FooterProps} {...FooterCb} {...FooterIoProps}>
<Flex className="p-Home Flex107 bpt" {...Flex107Props} {...Flex107Cb} {...Flex107IoProps}>
<Flex className="p-Home Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<TextBox className="p-Home TextBox_114 bpt" {...TextBox_114Props} {...TextBox_114Cb} {...TextBox_114IoProps}/>
<TextBox className="p-Home TextBox_115 bpt" {...TextBox_115Props} {...TextBox_115Cb} {...TextBox_115IoProps}/>
</Flex>
<Flex className="p-Home Flex109 bpt" {...Flex109Props} {...Flex109Cb} {...Flex109IoProps}>
<Flex className="p-Home Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<Flex className="p-Home Flex111 bpt" {...Flex111Props} {...Flex111Cb} {...Flex111IoProps}>
<TextBox className="p-Home TextBox_116 bpt" {...TextBox_116Props} {...TextBox_116Cb} {...TextBox_116IoProps}/>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Flex>
<Flex className="p-Home Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<TextBox className="p-Home TextBox_117 bpt" {...TextBox_117Props} {...TextBox_117Cb} {...TextBox_117IoProps}/>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Flex>
<Flex className="p-Home Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<TextBox className="p-Home TextBox_118 bpt" {...TextBox_118Props} {...TextBox_118Cb} {...TextBox_118IoProps}/>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
</Flex>
<Flex className="p-Home Flex114 bpt" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<TextBox className="p-Home TextBox_119 bpt" {...TextBox_119Props} {...TextBox_119Cb} {...TextBox_119IoProps}/>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<Flex className="p-Home Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<TextBox className="p-Home TextBox_120 bpt" {...TextBox_120Props} {...TextBox_120Cb} {...TextBox_120IoProps}/>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
</Flex>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<TextBox className="p-Home TextBox_121 bpt" {...TextBox_121Props} {...TextBox_121Cb} {...TextBox_121IoProps}/>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Flex>
<Flex className="p-Home Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<TextBox className="p-Home TextBox_122 bpt" {...TextBox_122Props} {...TextBox_122Cb} {...TextBox_122IoProps}/>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
</Flex>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<TextBox className="p-Home TextBox_123 bpt" {...TextBox_123Props} {...TextBox_123Cb} {...TextBox_123IoProps}/>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<TextBox className="p-Home TextBox_124 bpt" {...TextBox_124Props} {...TextBox_124Cb} {...TextBox_124IoProps}/>
<TextBox className="p-Home TextBox_125 bpt" {...TextBox_125Props} {...TextBox_125Cb} {...TextBox_125IoProps}/>
</Flex>
<Flex className="p-Home Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<TextBox className="p-Home TextBox_126 bpt" {...TextBox_126Props} {...TextBox_126Cb} {...TextBox_126IoProps}/>
<TextBox className="p-Home TextBox_127 bpt" {...TextBox_127Props} {...TextBox_127Cb} {...TextBox_127IoProps}/>
<Flex className="p-Home Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<TextBox className="p-Home TextBox_128 bpt" {...TextBox_128Props} {...TextBox_128Cb} {...TextBox_128IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<Flex className="p-Home Flex_126 bpt" {...Flex_126Props} {...Flex_126Cb} {...Flex_126IoProps}>
<TextBox className="p-Home TextBox_129 bpt" {...TextBox_129Props} {...TextBox_129Cb} {...TextBox_129IoProps}/>
<TextBox className="p-Home TextBox_130 bpt" {...TextBox_130Props} {...TextBox_130Cb} {...TextBox_130IoProps}/>
<TextBox className="p-Home TextBox_131 bpt" {...TextBox_131Props} {...TextBox_131Cb} {...TextBox_131IoProps}/>
</Flex>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<TextBox className="p-Home TextBox_132 bpt" {...TextBox_132Props} {...TextBox_132Cb} {...TextBox_132IoProps}/>
<TextBox className="p-Home TextBox_133 bpt" {...TextBox_133Props} {...TextBox_133Cb} {...TextBox_133IoProps}/>
<TextBox className="p-Home TextBox_134 bpt" {...TextBox_134Props} {...TextBox_134Cb} {...TextBox_134IoProps}/>
</Flex>
<Flex className="p-Home Flex_128 bpt" {...Flex_128Props} {...Flex_128Cb} {...Flex_128IoProps}>
<TextBox className="p-Home TextBox_135 bpt" {...TextBox_135Props} {...TextBox_135Cb} {...TextBox_135IoProps}/>
<TextBox className="p-Home TextBox_136 bpt" {...TextBox_136Props} {...TextBox_136Cb} {...TextBox_136IoProps}/>
<TextBox className="p-Home TextBox_137 bpt" {...TextBox_137Props} {...TextBox_137Cb} {...TextBox_137IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<TextBox className="p-Home TextBox_138 bpt" {...TextBox_138Props} {...TextBox_138Cb} {...TextBox_138IoProps}/>
</Flex>
</Flex>
</Flex>
  </>);
}
