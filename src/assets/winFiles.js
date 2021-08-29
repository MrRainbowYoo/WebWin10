const treeData = [
  {
    isParent: true,
    isExpand: false,
    text: 'A'
  },
  {
    isParent: true,
    isExpand: false,
    text: 'Access',
    img: require("./Access.png"),
  },
  {
    isParent: true,
    isExpand: false,
    text: "Adobe",
    img: require("./文件夹0.png"),
    children: [
      {
        isExpand: false,
        text: "Adobe Bridge CS6 (64bit)",
        img: require("./br.png"),
      },
      {
        isExpand: false,
        text: "Adobe After Effects CS6",
        img: require("./ae.png"),
      },
      {
        isExpand: false,
        text: "Adobe PhotoShop CS6",
        img: require("./ps.png"),
      },
      {
        isExpand: false,
        text: "Adobe Premiere Pro CS6",
        img: require("./pr.png"),
      },
    ],
  },
  {
    isParent: true,
    isExpand: false,
    text: "Anaconda3 (64-bit)",
    img: require("./文件夹0.png"),
    children: [
      {
        isExpand: false,
        text: "Anaconda Navigator (anaconda3)",
        img: require("./ana0.png"),
      },
      {
        isExpand: false,
        text: "Anaconda Powershell Prompt (anaconda3)",
        img: require("./ana1.png"),
      },
      {
        isExpand: false,
        text: "Anaconda Prompt (anaconda3)",
        img: require("./ana1.png"),
      },
      {
        isExpand: false,
        text: "Jupyter Notebook (anaconda3)",
        img: require("./ana2.png"),
      },
      {
        isExpand: false,
        text: "Spyder (anaconda3)",
        img: require("./ana3.png"),
      },
    ],
  },
  {
    isParent: true,
    isExpand: false,
    text: 'B'
  },
  {
    isParent: true,
    isExpand: false,
    text: "百度网盘",
    img: require("./文件夹0.png"),
    children: [
      {
        isExpand: false,
        text: "百度网盘",
        img: require("./百度网盘.png"),
      },
      {
        isExpand: false,
        text: "卸载百度网盘",
        img: require('./卸载百度网盘.png')
      }
    ],
  },
  {
    isParent: true,
    isExpand: false,
    text: 'C'
  },
  {
    isParent: true,
    isExpand: false,
    text: "Cisco Packet Tracer Student",
    img: require("./文件夹0.png"),
    children: [
      {
        isExpand: false,
        text: "Cisco Packet Tracer Student",
        img: require("./cisco0.png"),
      },
      {
        isExpand: false,
        text: "Qt Linguist",
        img: require("./cisco1.png"),
      }
    ],
  },
  {
    isParent: true,
    isExpand: false,
    text: 'Clash for Windows',
    img: require("./clashforwindows.png"),
  },
  {
    isParent: true,
    isExpand: false,
    text: 'E'
  },
  {
    isParent: true,
    isExpand: false,
    text: "Eclipse",
    img: require("./文件夹0.png"),
    children: [
      {
        isExpand: false,
        text: "Eclispe IDE for Enterprise Java Developers",
        img: require("./eclipse.png"),
      }
    ],
  },
  {
    isParent: true,
    isExpand: false,
    text: "Excel",
    img: require("./excel.png"),
  },
  {
    isParent: true,
    isExpand: false,
    text: 'G'
  },

  {
    isParent: true,
    isExpand: false,
    text: "Git",
    img: require("./文件夹0.png"),
    children: [
      {
        isExpand: false,
        text: "Git Bash",
        img: require("./git.png"),
      },
      {
        isExpand: false,
        text: "Git CMD (Deprecated)",
        img: require("./git.png"),
      },
      {
        isExpand: false,
        text: "Git GUI",
        img: require("./git.png"),
      },
    ],
  },
  {
    isParent: true,
    isExpand: false,
    text: 'Google Chrome',
    img: require("./chrome.png"),
  },
  {
    isParent: true,
    isExpand: false,
    text: 'J'
  },
  {
    isParent: true,
    isExpand: false,
    text: "Java",
    img: require("./文件夹0.png"),
    children: [
      {
        isExpand: false,
        text: "访问 Java.com",
        img: require("./java.png"),
      },
      {
        isExpand: false,
        text: "关于 Java",
        img: require("./java.png"),
      },
      {
        isExpand: false,
        text: "获取帮助",
        img: require("./java.png"),
      },
      {
        isExpand: false,
        text: "检查更新",
        img: require("./java.png"),
      },
      {
        isExpand: false,
        text: "配置Java",
        img: require("./java.png"),
      },
    ],
  },
  {
    isParent: true,
    isExpand: false,
    text: "Java Development Kit",
    img: require("./文件夹0.png"),
    children: [
      {
        isExpand: false,
        text: "Java Mission Control",
        img: require("./java1.png"),
      },
      {
        isExpand: false,
        text: "参考文档",
        img: require("./java.png"),
      },
    ],
  },
  {
    isParent: true,
    isExpand: false,
    text: "JetBrains",
    img: require("./文件夹0.png"),
    children: [
      {
        isExpand: false,
        text: "PyCharm 2020.2.3",
        img: require("./pc.png"),
      },
      {
        isExpand: false,
        text: "WebStorm 2019.3.3",
        img: require("./ws.png"),
      },
    ],
  },
]

export default treeData