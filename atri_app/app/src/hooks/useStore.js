import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "About": {
      "callbacks": {}
    },
    "Flex4": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "Flex10": {
      "callbacks": {}
    },
    "TrustedBy": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Navigation": {
      "callbacks": {}
    },
    "Flex1": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "NavigationFlex": {
      "callbacks": {}
    },
    "Flex3": {
      "callbacks": {}
    },
    "Services": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Flex15": {
      "callbacks": {}
    },
    "Flex17": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {}
    },
    "Flex16": {
      "callbacks": {}
    },
    "Projects": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Flex20": {
      "callbacks": {}
    },
    "Flex24": {
      "callbacks": {}
    },
    "Flex28": {
      "callbacks": {}
    },
    "Flex29": {
      "callbacks": {}
    },
    "Flex30": {
      "callbacks": {}
    },
    "Flex25": {
      "callbacks": {}
    },
    "Flex26": {
      "callbacks": {}
    },
    "Flex27": {
      "callbacks": {}
    },
    "Flex254": {
      "callbacks": {}
    },
    "Flex252": {
      "callbacks": {}
    },
    "Flex253": {
      "callbacks": {}
    },
    "Flex257": {
      "callbacks": {}
    },
    "Flex255": {
      "callbacks": {}
    },
    "Flex256": {
      "callbacks": {}
    },
    "Flex21": {
      "callbacks": {}
    },
    "Flex22": {
      "callbacks": {}
    },
    "Flex23": {
      "callbacks": {}
    },
    "Products": {
      "callbacks": {}
    },
    "Flex54": {
      "callbacks": {}
    },
    "Flex55": {
      "callbacks": {}
    },
    "Flex56": {
      "callbacks": {}
    },
    "Flex57": {
      "callbacks": {}
    },
    "Flex58": {
      "callbacks": {}
    },
    "Flex61": {
      "callbacks": {}
    },
    "Flext59": {
      "callbacks": {}
    },
    "Flex60": {
      "callbacks": {}
    },
    "Blogs": {
      "callbacks": {}
    },
    "Flex36": {
      "callbacks": {}
    },
    "Flex37": {
      "callbacks": {}
    },
    "Flex38": {
      "callbacks": {}
    },
    "Flex40": {
      "callbacks": {}
    },
    "Flex51": {
      "callbacks": {}
    },
    "Flex52": {
      "callbacks": {}
    },
    "Flex53": {
      "callbacks": {}
    },
    "Flex48": {
      "callbacks": {}
    },
    "Flex49": {
      "callbacks": {}
    },
    "Flex50": {
      "callbacks": {}
    },
    "Flex46": {
      "callbacks": {}
    },
    "Flex47": {
      "callbacks": {}
    },
    "Flex126": {
      "callbacks": {}
    },
    "Flex43": {
      "callbacks": {}
    },
    "Flex44": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Flex41": {
      "callbacks": {}
    },
    "Flex42": {
      "callbacks": {}
    },
    "Flex128": {
      "callbacks": {}
    },
    "Flex39": {
      "callbacks": {}
    },
    "EducationAndExperience": {
      "callbacks": {}
    },
    "Flex62": {
      "callbacks": {}
    },
    "Flex63": {
      "callbacks": {}
    },
    "Flex66": {
      "callbacks": {}
    },
    "Flex73": {
      "callbacks": {}
    },
    "Flex_ABC": {
      "callbacks": {}
    },
    "Flex74": {
      "callbacks": {}
    },
    "Flex70": {
      "callbacks": {}
    },
    "Flex_72": {
      "callbacks": {}
    },
    "Flex71": {
      "callbacks": {}
    },
    "Flex67": {
      "callbacks": {}
    },
    "Flex68": {
      "callbacks": {}
    },
    "Flex69": {
      "callbacks": {}
    },
    "Flex64": {
      "callbacks": {}
    },
    "Flex65": {
      "callbacks": {}
    },
    "Flex_75": {
      "callbacks": {}
    },
    "Flex76": {
      "callbacks": {}
    },
    "Flex77": {
      "callbacks": {}
    },
    "Flex88": {
      "callbacks": {}
    },
    "Flex89": {
      "callbacks": {}
    },
    "Flex91": {
      "callbacks": {}
    },
    "Flex90": {
      "callbacks": {}
    },
    "Flex92": {
      "callbacks": {}
    },
    "Flex93": {
      "callbacks": {}
    },
    "Flex94": {
      "callbacks": {}
    },
    "Flex95": {
      "callbacks": {}
    },
    "Flex96": {
      "callbacks": {}
    },
    "Flex97": {
      "callbacks": {}
    },
    "Testimonials": {
      "callbacks": {}
    },
    "Flex98": {
      "callbacks": {}
    },
    "Flex99": {
      "callbacks": {}
    },
    "Flex102": {
      "callbacks": {}
    },
    "Flex100": {
      "callbacks": {}
    },
    "Flex_101": {
      "callbacks": {}
    },
    "Flex103": {
      "callbacks": {}
    },
    "Flex104": {
      "callbacks": {}
    },
    "Flex105": {
      "callbacks": {}
    },
    "Flex106": {
      "callbacks": {}
    },
    "Footer": {
      "callbacks": {}
    },
    "Flex107": {
      "callbacks": {}
    },
    "Flex108": {
      "callbacks": {}
    },
    "Flex109": {
      "callbacks": {}
    },
    "Flex110": {
      "callbacks": {}
    },
    "Flex111": {
      "callbacks": {}
    },
    "Flex112": {
      "callbacks": {}
    },
    "Flex114": {
      "callbacks": {}
    },
    "Flex113": {
      "callbacks": {}
    },
    "Flex115": {
      "callbacks": {}
    },
    "Flex119": {
      "callbacks": {}
    },
    "Flex118": {
      "callbacks": {}
    },
    "Flex117": {
      "callbacks": {}
    },
    "Flex116": {
      "callbacks": {}
    },
    "Flex120": {
      "callbacks": {}
    },
    "Flex121": {
      "callbacks": {}
    },
    "Flex122": {
      "callbacks": {}
    },
    "Flex123": {
      "callbacks": {}
    },
    "Flex124": {
      "callbacks": {}
    },
    "Flex125": {
      "callbacks": {}
    },
    "Flex_126": {
      "callbacks": {}
    },
    "Flex127": {
      "callbacks": {}
    },
    "Flex_128": {
      "callbacks": {}
    },
    "Flex129": {
      "callbacks": {}
    },
    "TextBox_5": {
      "custom": {
        "text": "inspire people"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_4": {
      "custom": {
        "text": "that delight and"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_6": {
      "custom": {
        "text": "Hi! I’m Jake, a product designer based in Berlin. I "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_7": {
      "custom": {
        "text": "create user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_8": {
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_1": {
      "custom": {
        "text": "I "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_2": {
      "custom": {
        "text": "design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_3": {
      "custom": {
        "text": "products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MyImage": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/my_profile.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_10": {
      "custom": {
        "text": "Trusted By"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "logo3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Logo2.ico"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "logo1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Logo1.ico"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "logo2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Logo3.ico"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "logo4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Logo4.ico"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MainLogo": {
      "custom": {
        "text": "Portfolio Creator"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Nav4": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Nav1": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Nav2": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Nav3": {
      "custom": {
        "text": "Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Nav5": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_11": {
      "custom": {
        "text": "SERVICES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_12": {
      "custom": {
        "text": "Design that solves problems,"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_13": {
      "custom": {
        "text": "one product at a time. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image_2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Service_Logo_2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_21": {
      "custom": {
        "text": "Applications I'am fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_27": {
      "custom": {
        "text": "• Figma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_22": {
      "custom": {
        "text": "Every designer needs the right tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_24": {
      "custom": {
        "text": "multilingual"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_26": {
      "custom": {
        "text": "• Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_25": {
      "custom": {
        "text": "• Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_23": {
      "custom": {
        "text": "to do the perfect job. Thankfully, I'm"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_30": {
      "custom": {
        "text": "than pretty. I make them shippable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_32": {
      "custom": {
        "text": "• Clean and functional"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_33": {
      "custom": {
        "text": "• Device and user friendly"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_31": {
      "custom": {
        "text": "and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_29": {
      "custom": {
        "text": "I design products that are more"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_34": {
      "custom": {
        "text": "• Efficient and Maintainable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_28": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image_3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Serrvice_Logo_3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_16": {
      "custom": {
        "text": "users love. Here's all the services I"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_18": {
      "custom": {
        "text": "• Design Strategy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_19": {
      "custom": {
        "text": "• Web and Mobile App Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_17": {
      "custom": {
        "text": "provide"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_15": {
      "custom": {
        "text": "Faster, better products that your"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_20": {
      "custom": {
        "text": "• Front-end Development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_14": {
      "custom": {
        "text": "What can I do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image_1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Service_Logo_1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ProjImage2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Gorilax_Rebrand_Project.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_45": {
      "custom": {
        "text": "Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_46": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_43": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_44": {
      "custom": {
        "text": "Gorillax"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ProjImage1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Databash_Design_Project.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_40": {
      "custom": {
        "text": "Product"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_42": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_38": {
      "custom": {
        "text": "PRODUCT DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_39": {
      "custom": {
        "text": "Databash"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_41": {
      "custom": {
        "text": "Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox274": {
      "custom": {
        "text": "Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox275": {
      "custom": {
        "text": "Soulful "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox276": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox277": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image54": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/SoulFul_Rebrand_Project.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox278": {
      "custom": {
        "text": "Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox279": {
      "custom": {
        "text": "Maize Website"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox280": {
      "custom": {
        "text": "WEB DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox281": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image55": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Maize_Website_Project.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_37": {
      "custom": {
        "text": "My clients are proof."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_36": {
      "custom": {
        "text": "I bring results."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_35": {
      "custom": {
        "text": "PROJECTS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button2": {
      "custom": {
        "text": "View all projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_81": {
      "custom": {
        "text": "PRODUCT DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_82": {
      "custom": {
        "text": "That's me!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_83": {
      "custom": {
        "text": "Over the past 12 years, I've worked with a diverse range of"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_85": {
      "custom": {
        "text": "crafting interfaces that delight users and help businesses grow."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_84": {
      "custom": {
        "text": "clients, from startups to Fortune 500 companies. I love"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ProdImage4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/My_Image_2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ProdImage3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/My_Image_3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ProdImage1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/My_Image_1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ProdImage2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/My_Image_4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_56": {
      "custom": {
        "text": "BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_80": {
      "custom": {
        "text": "Read this article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_79": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_76": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_77": {
      "custom": {
        "text": "."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_78": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_75": {
      "custom": {
        "text": "Read this article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_74": {
      "custom": {
        "text": "Logo Design Trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_71": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_72": {
      "custom": {
        "text": "."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_73": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_70": {
      "custom": {
        "text": "Read this article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_69": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox165": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox157": {
      "custom": {
        "text": "."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox158": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_66": {
      "custom": {
        "text": "How to build rapport with your web"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_67": {
      "custom": {
        "text": "design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_68": {
      "custom": {
        "text": "Read this article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_63": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_65": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_64": {
      "custom": {
        "text": "."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_59": {
      "custom": {
        "text": "Design tips for designers, that cover"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_60": {
      "custom": {
        "text": "everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_61": {
      "custom": {
        "text": "Read this article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_62": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox161": {
      "custom": {
        "text": "6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox162": {
      "custom": {
        "text": "."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_58": {
      "custom": {
        "text": "View all"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_57": {
      "custom": {
        "text": "Latest Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_95": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_94": {
      "custom": {
        "text": "Bsc in Software Engineering"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_93": {
      "custom": {
        "text": "California State University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_92": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_91": {
      "custom": {
        "text": "UX Training BootCamp"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_90": {
      "custom": {
        "text": "MIT Summer School"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_87": {
      "custom": {
        "text": "StandFord University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_88": {
      "custom": {
        "text": "Msc (Human Interaction)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_89": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "EducationImage": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/education_icon.ico"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_86": {
      "custom": {
        "text": "Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "WorkImage": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/work_experience_icon.ico"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_96": {
      "custom": {
        "text": "Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_99": {
      "custom": {
        "text": "• April 2019 - Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_98": {
      "custom": {
        "text": "Senior Product Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_97": {
      "custom": {
        "text": "SplaceFleet"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_100": {
      "custom": {
        "text": "MusicMash"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_101": {
      "custom": {
        "text": "Information Architect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_102": {
      "custom": {
        "text": "• April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_103": {
      "custom": {
        "text": "Kingdom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_104": {
      "custom": {
        "text": "UI Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_105": {
      "custom": {
        "text": "• April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/person_image.jfif"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_106": {
      "custom": {
        "text": "TESTIMONIALS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_107": {
      "custom": {
        "text": "Word on the street"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "InvertedComm": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Inverted_Comma.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_111": {
      "custom": {
        "text": "problems with brilliant design."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_110": {
      "custom": {
        "text": "walkthrough. He solved complex"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_108": {
      "custom": {
        "text": "Jade helped us build a software so"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_109": {
      "custom": {
        "text": "intuitive that it didn't need a"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_112": {
      "custom": {
        "text": "John Frankin"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_113": {
      "custom": {
        "text": "Founder, Double Bunch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_115": {
      "custom": {
        "text": "Frequently Asked Questions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_114": {
      "custom": {
        "text": "FAQ"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Question_Icon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_116": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Question_Icon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_117": {
      "custom": {
        "text": "What time zone do you work  in?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Question_Icon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_119": {
      "custom": {
        "text": "What is the typical timeline for a project?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_118": {
      "custom": {
        "text": "What is your hourly rate ?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Question_Icon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_123": {
      "custom": {
        "text": "What if i need help after project is complete?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Question_Icon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_122": {
      "custom": {
        "text": "What metrics do you use  to measure success?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Question_Icon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_121": {
      "custom": {
        "text": "What does your design process look like?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Question_Icon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Question_Icon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_120": {
      "custom": {
        "text": "How do you charge for projects?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_124": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_125": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_126": {
      "custom": {
        "text": "Portfolio Creator"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_127": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mail_icon.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_128": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_129": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_131": {
      "custom": {
        "text": "Dribble"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_130": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_133": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_134": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_132": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_136": {
      "custom": {
        "text": "Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_137": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_135": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Footer_Icon.ico"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox_138": {
      "custom": {
        "text": "All rights reserved. Conversionflow. Powered by Webflow / Image License Info / Instructions / Changelog / Style Guide"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
