import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: '博美' ,describe:"博美是一种紧凑、短背、活跃的玩赏犬，学名哈多利系博美犬（俗称英系博美犬），是德国狐狸犬的一种，原产德国。它拥有柔软、浓密的底毛和粗硬的皮毛。尾根位置很高，长有浓密饰毛的尾巴卷放在背上。它具有警惕的性格、聪明的表情、轻快的举止和好奇的天性。体型小巧可爱，适合当伴侣犬，白色和棕色的居多。德国狐狸犬，包括荷兰毛狮犬，大型狐狸犬，中型狐狸犬，小型狐狸犬和松鼠犬（也就是博美犬），同时也是很有竞争力的比赛犬。其毛色有白、偏黄奶油、花色、黑、红、棕等。"
      ,img:'https://wx1.sinaimg.cn/orj360/006sdN4Uly1gro17bkpihj30xy0m7q5o.jpg'},
      { id: 2, name: '拉布拉多',describe:"拉布拉多又称寻回犬，是一种中大型犬类，是非常适合被选作经常出入公共场合的导盲犬或地铁警犬及搜救犬和其他工作犬的狗品种，因原产地在加拿大的纽芬兰与拉布拉多省而得名。跟西伯利亚雪撬犬和金毛寻回犬并列三大无攻击性犬类。拉布拉多智商位列世界犬类第六位。个性忠诚、大气、憨厚、温和、阳光、开朗、活泼，智商极高，也对人很友善，拉布拉多猎犬有四种颜色，分别为：黑色、黄色、巧克力、米白色。最常见的是黑色，黄色。在美国犬业俱乐部中拉布拉多是登记数量最多的品种，对小孩尤其的友善，对犬主人略粘人。" 
      ,img:'https://wx1.sinaimg.cn/orj360/006sdN4Uly1gro15hbj3aj30u00gxtai.jpg'},
      { id: 3, name: '柴犬',describe:"柴犬是体型中等并且又最古老的犬。柴犬能够应付陡峭的丘陵和山脉的斜坡，拥有灵敏的感官，使得柴犬屡次成为上乘的狩猎犬。柴犬性格活泼、好动。对自己喜欢的玩具、会一天到晚的把玩。其对外有极强警惕性，能为户主看家护院。其特别是对大型同类，并且不服输。草丛中的耗子、鸟都会是它的猎物及玩具。柴犬是日本国宝，常见的赤色柴犬价格都在6000元到30000元之间。" 
      ,img:'https://wx1.sinaimg.cn/orj360/006sdN4Uly1gro15g2b7hj30kv0dc0tj.jpg'},
      { id: 4, name: '柯基',describe:"威尔士柯基犬（welsh corgi pembroke）是一种小型犬，它们的胆子很大，也相当机警，能高度警惕地守护家园，是最受欢迎的小型护卫犬之一。本性友好，勇敢大胆，既不胆怯也不凶残，性格温和。精力旺盛，容易训练，很快适应家居生活，会成为孩子们的好朋友。" 
      ,img:'https://wx1.sinaimg.cn/orj360/006sdN4Uly1gro15giacuj30sg0iytbg.jpg'},
      { id: 5, name: '边牧',describe:"边境牧羊犬（Border Collie），原产于苏格兰边境，为柯利牧羊犬的一种，具有强烈的牧羊本能，天性聪颖、善于察言观色，能准确明白主人的指示，可借由眼神的注视而驱动羊群移动或旋转，被当成牧羊犬已有多年的历史，在世界犬种智商排行第一名。特点是聪明、学习能力强、理解力高、容易训练、善于和主人沟通、温和、忠诚、服从性好，其忠心程度可以用如影随形来形容。由于温和忠诚的性格不乱叫，一度成为最受城市人口欢迎的宠物。而且边境牧羊犬还是飞盘狗最具竞争力的犬种，是历年飞盘狗世界杯大赛的主角。" 
      ,img:'https://wx1.sinaimg.cn/orj360/006sdN4Uly1gro15frkl6j30dw0943z6.jpg'},
      { id: 6, name: '阿拉斯加',describe:"阿拉斯加雪橇犬也叫阿拉斯加犬，是最古老的极地雪橇犬之一，它的名字取自因纽特人的伊努伊特族的一个叫做马拉缪特的部落。这个部落生活在阿拉斯加西部一个叫做科策布(Kotzebue)的岸边。成年阿拉斯加犬有着安静、高雅的气质，对主人非常忠心。" 
      ,img:'https://wx1.sinaimg.cn/orj360/006sdN4Uly1gro15fmqbuj30m80er416.jpg'},
      { id: 7, name: '哈士奇',describe:"西伯利亚雪橇犬（俄语：Сибирский хаски，英语：Siberian Husky），常见别名哈士奇，昵称为二哈。西伯利亚雪橇犬是原始的古老犬种，主要生活在西伯利亚东北部、格陵兰南部。哈士奇名字是源自其独特的嘶哑叫声。哈士奇性格多变，有的极端胆小，也有的极端暴力，进入人类社会和家庭的哈士奇，都已经没有了这种极端的性格，比较温顺，是一种流行于全球的宠物犬。哈士奇、金毛犬与拉布拉多并列为三大无攻击性犬类，被世界各地人们广泛饲养，并在全球范围内有大量该犬种的赛事。" 
      ,img:'https://wx1.sinaimg.cn/orj360/006sdN4Uly1gro15gbbvbj30hs0bvmxr.jpg'},
      { id: 8, name: '斗牛犬',describe:"斗牛犬（英文名：Bulldog）是犬科犬属的动物，是家犬的一个亚种，原产英国，起源于19世纪，狗中最具有战斗力的犬种之一。直到1835年英格兰禁止逗引公牛之前，属于非常常见的品种。此后，经过有选择的培育，性格逐渐变文雅。现有法国斗牛犬、英国斗牛、荷兰斗牛犬，美国斗牛犬等类型" 
      ,img:'https://wx1.sinaimg.cn/orj360/006sdN4Uly1gro15g72muj60ew08taas02.jpg'},
      { id: 9, name: '萨摩耶',describe:"萨摩耶犬（英文：Samoyed），别称萨摩耶，原是西伯利亚的原住民萨摩耶族培育出的犬种，一岁前调皮、灵动。它机警、强壮、灵活、美丽、高贵优雅、乖巧可爱，有着非常引人注目的外表，有“微笑天使”的称号，也有着“微笑天使面孔，捣蛋魔鬼内心”之称。萨摩耶犬的颜色为白色；部分带有很浅的浅棕色、奶酪色、浅棕色。此外其他颜色都属于失格。世界上曾出现过一只灰白色萨摩，FCI承认他是具有纯种血统萨摩耶基因的返祖萨摩，黑色萨摩耶犬极为罕见。" 
      ,img:'https://wx1.sinaimg.cn/mw2000/006sdN4Uly1gro15io2tzj30u00ir75e.jpg'},
      { id: 10, name: '腊肠犬',describe:'腊肠犬（Dachshund）是一种短腿，长身的猎犬。其名源于德国，原意"獾狗"。此品种被发展为嗅猎，追踪，及捕杀獾类及其他穴居的动物。有意思的是，虽然"Dachshund"是一个德语单词，但是它在德国并不常用，德国人通常叫它Dackel或Teckel。原产于德国，现遍及各地。腊肠犬在所有狗种中是比较好养的。因为腊肠犬的天性独立自主，所以照顾起来很容易，主人下达的指令也都会迅速理解遵从。' 
      ,img:'https://wx1.sinaimg.cn/mw2000/006sdN4Uly1gro15ic4n1j30dw0820t4.jpg'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}