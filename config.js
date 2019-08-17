const config = {
  // 数据源的编码方式。
  // 默认为UTF-8。
  // 如果是国内用户，且使用旧版Execl处理数据，保存的编码很可能是GBK的，如果出现乱码则将这里改成GBK。
  // 不建议修改这里。而是建议将自己制作完毕的csv文件的内容复制到example.csv中。因为example.csv的编码格式是所有语言都支持的。
  // Encoding is not recommended to be modified.
  // Instead, it is recommended to copy the contents of the CSV file produced by yourself to example.csv.
  // The encoding format of example.csv is supported by all languages.
  encoding: "UTF-8",

  // 每个时间节点最多显示的条目数。
  max_number: 15,

  // 控制是否显示顶部附加信息文字。
  showMessage: true,

  // 时间自动排序。
  // !!!请确保打开此项时，使用的是标准日期格式！(即：YYYY-MM-DD HH:MM)
  // 如果关闭，排序顺序为csv表格的时间字段自上而下的出现顺序。
  // 如果你的日期格式为标准的日期格式，则可以无视数据排序，达到自动按照日期顺序排序的效果。
  // 开启auto_sort可以实现时间的自动补间。
  // Auto Sort by Time
  // Please ensure using standard datetime format (YYYY-MM-DD HH:MM) when this term is enabled!!!
  auto_sort: false,

  // 时间格式化
  timeFormat: "%Y-%m-%d",

  // 倒序，使得最短的条位于最上方
  reverse: false,

  // 类型根据什么字段区分？如果是name，则关闭类型显示
  divide_by: 'type',

  // 颜色根据什么字段区分？
  divide_color_by: 'name',

  // 字段的值与其对应的颜色值
  color: {
    "Chinese": "#1177CC",
    "Japanese": "#667788"
  },

  // 颜色渐变：颜色绑定增长率
  changeable_color: false,

  // 添加功能：不同类型的增长率所用渐变色不同(暗→亮)
  // 如果该项为false，那么所有条目全部按照color_range变色
  // 如果该项为true，那么按照src/color_ranges.js中的color_ranges变色，默认色板为color_range
  // 一个具体的设置模板见src/_color_ranges.js，将其更名为color_ranges.js再设置即可
  divide_changeable_color_by_type: false,
  color_range: ['#ff7e5f', '#feb47b'],


  // 附加信息内容。
  // left label
  itemLabel: "1990-2019 NBA历史得分榜TOP15",

  // right label
  typeLabel: "",


  // 榜首项目信息的水平位置 。
  // Top item information horizontal location
  item_x: 250,

  // 时间点间隔时间。
  interval_time: 0.4,

  // 上方文字水平高度。
  text_y: -50,

  // 右侧文字横坐标
  text_x: 1000,
  // 偏移量
  offset: 350,

  // 长度小于display_barInfo的bar将不显示barInfo。
  // Hide barInfo if bar is shorter than barInfo
  display_barInfo: 0,

  // 使用计数器
  // 注意！使用计时器和使用类型目前不能兼容，即不能同时开启！
  // 计数器会出现在右上角，记录着当前榜首的持续时间。
  use_counter: false,
  // 每个时间节点对于计数器的步长。
  // 比如时间节点日期的间隔可能为1周（七天），那么step的值就应该为7。
  step: 1,

  //////////////////////////////////////////////////////////////////////////////
  // 格式化数值
  // 这里控制着数值的显示位数。主要靠修改中间的数字完成，如果为1则为保留一位小数。
  // 逗号表示每隔三位数用","分割
  // '.2f' means keeping two decimals.
  format: ",.0f",

  // 后缀
  postfix: "",

  // 如果看不懂这是在干什么的话，建议不要修改这里。
  // 反格式化函数:
  // 格式化操作可能会导致NaN问题。此函数将格式化后的数值反格式化为JS可以识别的数字。
  deformat: function (val, postfix) {
    return Number(val.replace(postfix, "").replace(/\,/g, ""));
  },
  //////////////////////////////////////////////////////////////////////////////

  // 图表左右上下间距。
  // 注意，left_margin不包括左侧的label，修改数值较小会导致左侧label不显示
  left_margin: 250,
  right_margin: 150,
  top_margin: 180,
  bottom_margin: 0,

  // 是否开启时间标签。
  dateLabel_switch: true,
  // 时间标签坐标。建议x：1000 y：-50开始尝试，默认位置为x:null,y:null
  dateLabel_x: null,
  dateLabel_y: null,

  // 允许大于平均值的条消失时上浮。
  allow_up: false,

  // 所有条目上浮 - 用于反向排行榜等情况
  always_up: false,

  // 设置动画效果，如果为true，则新进入的条目从0开始。
  enter_from_0: true,

  // 如果所有数字都很大，导致拉不开差距则开启此项使得坐标原点变换为（最小值）*2-（最大值）
  big_value: true,

  // 如果要使用半对数坐标，则开启此项
  use_semilogarithmic_coordinate: false,

  // barinfo太长？也许可以试试这个
  long: false,

  // 延迟多少个时间节点开始
  wait: 0,

  // 单独控制交换动画速度倍率
  update_rate: 1,

  // 开启匀速动画效果
  // animation:'linear',
  showLabel: false,

  // label x轴位置
  labelx: -10,

  use_img: true,

  // 图片路径，本地图片或者网上图片。
  // 也可在imgs.js中配置。
  imgs: {
    "卡里姆-贾巴尔": "http://photocdn.sohu.com/20100730/Img273869386.jpg",
	"威尔特-张伯伦":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565899351419&di=881a910c6102ac57a35cd4de9cf3124f&imgtype=0&src=http%3A%2F%2Fimg22.mtime.cn%2Fup%2F2010%2F09%2F28%2F211539.87439312_500.jpg",
	"埃尔文-海耶斯":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565899456270&di=a335f2e4463f5e00a2e4da3e6cb1ab60&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140709%2F20140709152238-350090690.jpg",
    "奥斯卡-罗波特森":"http://img.mp.itc.cn/upload/20170327/39ebfd5ef5e64569a9eeb8add2a7aeea_th.jpg",
	"约翰-哈福利切克":"http://05imgmini.eastday.com/mobile/20190221/20190221154219_3b2f45664b7e030a5fbfcf65429666cc_6.jpeg",
	"杰里-韦斯特":"http://img1.gtimg.com/sports/pics/hv1/217/241/2182/141946222.jpg",
	"摩西-马龙":"http://www.hinews.cn/pic/0/11/32/56/11325613_263847.jpg",
	"卡尔-马龙":"http://photocdn.sohu.com/20151010/mp34868959_1444409178007_5.jpeg",
	"科比-布莱恩特":"https://pic.wenwen.soso.com/p/20110215/20110215224235-830955730.jpg",
	"勒布朗-詹姆斯":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565899992108&di=de967b978a746d02637d4c842572151d&imgtype=0&src=http%3A%2F%2F09.imgmini.eastday.com%2Fmobile%2F20180625%2F20180625231102_092fd458814a14b5fd8fc2cf2818e80c_1.jpeg",
	"迈克尔-乔丹":"https://imgs.soufunimg.com/news/2010_06/07/news/1275896198749_000.jpg",
	"德克-诺维茨基":"http://images.china.cn/attachement/jpg/site1000/20080725/001ec92b902909f3a9a027.jpg",
	"沙奎尔-奥尼尔":"http://photocdn.sohu.com/20090803/Img265669463.jpg",
	"哈基姆-奥拉朱旺":"http://s9.sinaimg.cn/orignal/6490bf82tbeb2c567ec88",
	"多米尼克-威尔金斯":"http://photocdn.sohu.com/20130210/Img365959183.jpg",
	"蒂姆-邓肯":"http://t-1.tuzhan.com/76610e2e4d37/c-2/l/2013/06/21/18/8105d08c3f5643119b9a21e150d024f6.jpg",
	"保罗-皮尔斯":"http://img.mp.itc.cn/upload/20170719/5b13316f79064b679ca3da03dc76fb3a_th.jpg",
	"约翰-哈福利切克":"http://dingyue.ws.126.net/8tRQgwOQqdYl0lrlozmVzuKU9XpA6CibcGHZdKrXQXvD51543818313821compressflag.jpg",
	"阿历克斯-英格利什":"http://05imgmini.eastday.com/mobile/20190221/20190221154219_3b2f45664b7e030a5fbfcf65429666cc_1.jpeg",
	"埃尔金-贝勒":"http://06imgmini.eastday.com/mobile/20190217/20190217104244_ae808222ef7cca99f9ce2e14298d26ba_1.jpeg",
	"阿德里安-丹特利":"https://pic.baike.soso.com/ugc/baikepic2/12862/20170804213052-1597415466.jpg/300",
	"豪尔-格瑞尔":"http://www.stat-nba.com/image/playerImage/img_middle_common.jpg",
	"沃尔特-贝拉米":"http://img1.gtimg.com/sports/pics/hv1/219/228/1451/94409634.jpg",
	"乔治-格文":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565931023465&di=13243eb11bf12f862137bb4fe069232f&imgtype=0&src=http%3A%2F%2Fztd00.photos.bdimg.com%2Fztd%2Fw%3D700%3Bq%3D50%2Fsign%3D33dba5d2bffd5266a72b3e149b23e616%2F359b033b5bb5c9eaa7deaadadc39b6003af3b3de.jpg",
	"拉里-伯德":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566525824&di=0e9eeb75590cf001e11c6f11391ad994&imgtype=jpg&er=1&src=http%3A%2F%2Fa1.att.hudong.com%2F48%2F14%2F01300000329092124712148790830_s.jpg",
	"鲍伯-兰尼尔":"http://www.stat-nba.com/image/playerImage/img_middle_common.jpg",
	"罗波特-帕里什":"http://cdn1.mmia.com/spfocusimg/2013/0110/guowairenwu-2013-06-24-3(3).jpg",
	"查尔斯-巴克利":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565931477860&di=5d8ce9da53027031a890fa4b43a26670&imgtype=0&src=http%3A%2F%2Fc2.hoopchina.com.cn%2Fuploads%2Fstar%2Fevent%2Fimages%2F160707%2Fee7e20d4027fa7602e5ad011cca3ddf2d998d409.jpg",
	"帕特里克-尤因":"http://n.sinaimg.cn/sports/crawl/20170522/Ts_O-fyfkzhs8559481.jpg",
	"雷吉-米勒":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565931618091&di=daec89751ec87c31ea38821834b4dbec&imgtype=0&src=http%3A%2F%2Fimg3.cache.netease.com%2Fphoto%2F0005%2F2010-08-23%2F6EPLSU6A0AI90005.jpg",
	"凯文-加内特":"http://photocdn.sohu.com/20110219/Img279417988.jpg",
	"鲍勃-佩蒂特":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2644799371,772963570&fm=26&gp=0.jpg",
	"盖尔-古德里奇":"http://photocdn.sohu.com/20110906/Img318518540.jpg",
	"切特-沃克":"http://www.stat-nba.com/image/playerImage/img_middle_common.jpg",
	"鲍伯-麦克阿杜":"http://www.stat-nba.com/image/playerImage/2468.jpg",
	"多尔夫-谢伊斯":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566055885009&di=432eb861c708b0bbf823430a28d0fc7c&imgtype=0&src=http%3A%2F%2Fi9.qhmsg.com%2Fdmsmty%2F708_916_%2Ft0152f422e1bb3950bd.jpg",
	"伯纳德-金":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4120865428,727397280&fm=26&gp=0.jpg",
	"沃尔特-戴维斯":"http://img.mp.itc.cn/upload/20170323/0af6b1449d324e06ac8ad21cf03606aa_th.jpg"
	//"卡里姆-贾巴尔/Kareem Abdul-Jabbar": "D:\数据分析\贾巴尔.png"
  },

  // 全局背景颜色
  background_color: "#FFFFFF",

  // 矩形柱是否为圆角矩形
  rounded_rectangle: true,

  // 是否显示x轴轴线
  show_x_tick: true,

  // 限制bar info 展示的长度
  // limit bar info display length
  bar_name_max: 30
};