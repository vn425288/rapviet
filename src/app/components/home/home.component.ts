import { Component, OnInit } from '@angular/core';
import { Artist } from '../../model/artist';
import { areIterablesEqual } from '../../../../node_modules/@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Rap Việt - Underground Never Die';
  listArtist: Artist[] = [];
  selectedArtist: Artist;

  constructor() { }

  ngOnInit() {
    this.initDataForArtist();
  }

  initDataForArtist() {
    const artist1 = new Artist(
      1,
      'Mr A',
      'Với lợi thế về khả năng rap, sáng tác bên cạnh gu âm nhạc văn minh,' +
      'các sản phẩm của Mr.A nhanh chóng nằm trong playlist yêu thích của các bạn trẻ. ' +
      'Anh đã có những sản phẩm âm nhạc chất lượng chinh phục người nghe, gây dấu ấn với nhiều và bản hit đình đám.',
      'https://vignette.wikia.nocookie.net/rapviet/images/4/46/Mra.jpg/revision/latest?cb=20180626080320&path-prefix=vi'
    );

    const artist2 = new Artist(
      2,
      'Bray',
      'B Ray nói về âm nhạc anh đang theo đuổi: "Tôi không dám chắc chất lượng âm thanh, giọng Rap cuốn hút, ' +
      'hay một con beat mượt mà. Nhưng có một điều chắc chắn, khi tôi cho bạn nghe một track của tôi, ' +
      'tôi sẽ làm mọi cách để bạn được dạo một vòng vào trong trí óc của tôi, và bạn sẽ hiểu được mọi ý nghĩ trong đầu".',
      'https://vignette.wikia.nocookie.net/rapviet/images/d/d0/Bray-0.jpg/revision/latest?cb=20180626050603&path-prefix=vi'
    );

    const artist3 = new Artist(
      3,
      'Black Bi',
      'BlackBi là 1 rapper có trình độ cao và được ưa thích trong Underground. ' +
      'Ngoài ra anh còn là diễn viên hài của Fap TV, một kênh hài Youtube nổi tiếng hiện nay.',
      'https://2rap.vn/img/artist/black-bi.596.jpg'
    );

    const artist4 = new Artist(
      4,
      'Rhymastic',
      'Rhymastic là 1 rapper chuyên nghiệp của SpaceSpeakers. Không những rap, Rhym còn có khả năng mix nhạc khá tốt được ưa thích. ' +
      'Rhymastic từng tốt nghiệp trường Đại Học Kiến Trúc Hà Nội. Với đam mê vào nghệ thuật,' +
      'Rhymastic đã tự mày mò học sáng tác và sản xuất âm nhạc từ năm 2009.',
      'https://vignette.wikia.nocookie.net/rapviet/images/0/08/Rhym-0.jpg/revision/latest?cb=20180626050716&path-prefix=vi'
    );

    const artist5 = new Artist(
      5,
      'Binz',
      'Binz sinh ngày 24-5-1988 tại Tỉnh Gia Lai, nước Việt Nam. ' +
      'Anh sống và làm việc chủ yếu ở Thành phố Abilene, bang Texas- Hoa Kỳ. ' +
      'Anh sinh thuộc cung Song Tử, cầm tinh con (giáp) rồng (Mậu Thìn 1988). ' +
      'Binz xếp hạng nổi tiếng thứ 560 trên thế giới và thứ 118 trong danh sách Ca sĩ nổi tiếng. ' +
      'Tổng dân số của Việt Nam năm 1988 vào khoảng 63,26 triệu người. ' +
      'Binz tên thật Lê Nguyễn Trung Đan. Anh là một nam ca sĩ cũng rất thành công với thể loại nhạc Rap. ' +
      'Anh tham gia cộng đồng underground Việt từ năm 2008, Binz đã từng là artist của một số diễn đàn rap như Midsiderap, GVR.',
      'https://vignette.wikia.nocookie.net/rapviet/images/a/a2/Binz-0.jpg/revision/latest?cb=20180626052533&path-prefix=vi'
    );

    const artist6 = new Artist(
      6,
      'Wowy',
      'Wowy tên thật là Nguyễn Ngọc Minh Huy sinh ngày 27 tháng 9 năm 1988 là một rapper chuyên nghiệp người Việt Nam. ' +
      'Wowy là một rapper "đường phố" được khá nhiều bạn trẻ underground hâm mộ' +
      'đã từng bước đi lên từ chính đôi chân và khả năng của mình. ' +
      'Với bản chất ngông, cá tính, bản lĩnh nhưng không kém phần hài hước,' +
      'lôi cuốn khiến khán giả bùng cháy theo anh trên từng giai điệu.',
      'https://vignette.wikia.nocookie.net/rapviet/images/4/4c/Wowy-1.jpg/revision/latest?cb=20180626065206&path-prefix=vi'

    );

    const artist7 = new Artist(
      7,
      'Blacka',
      'Black Murder là 1 trong các rapper được cho là freestyle đỉnh nhất RV Underground. ' +
      'Thế mạnh của anh là biết rap tiếng anh và dùng punchline rất thông thạo. ' +
      'Thời VD còn sống anh là một trong những người trẻ tuổi được VD dẫn dắt. ' +
      'Hiện tại khó thể tìm được 1 rapper như BM, tuy còn khá trẻ nhưng rất ít ai có thể sánh với Black về lĩnh vực rap. ' +
      'Blacka là thành viên của G Family và giờ là trưởng nhóm Hazard Clique.',
      'https://vignette.wikia.nocookie.net/rapviet/images/0/07/Blacka-0.jpg/revision/latest?cb=20180626060243&path-prefix=vi'
    );

    const artist8 = new Artist(
      8,
      'LJ',
      'Rapper LJ tên khai sinh là Lê Đặng Kim Phước và tên tiếng anh là Jimmy Le ' +
      'sinh ngày 22 tháng 11 năm 1991 tại Nha Trang, Khánh Hòa, Việt Nam. ' +
      'LJ sinh sống tại Atlanta, Georgia, Hoa Kỳ. ' +
      'Trước đây,anh là thành viên của tập đoàn Ngoài Kia hiện tại LJ là thành viên của FSR. ' +
      'Anh nổi tiếng khi còn khá trẻ khi kết hợp với Xuân Mai trong bài hát "Và khi Anh." vào năm 2008.',
      'https://i1.ytimg.com/vi/msnQhiqeNtw/mqdefault.jpg'
    );

    const artist9 = new Artist(
      9,
      'Karik',
      'Karik là 1 rapper, ca sĩ nổi tiếng Việt Nam, từng hoạt động trong underground và là 1 phần gây ra beef Bắc-Nam 2013. ' +
      'Tham gia nhóm nhảy Freestyle năm 2006 và chính thức nghỉ vào cuối năm 2008 vì bị chấn thương tay phải. ' +
      'Sau vài tháng hồi phục lại nhưng vẫn không được hoàn thiện nên Karik đã nghỉ hẳn và chuyển sang con đường Rap để giải tỏa cảm xúc.' +
      'Ban đầu, Karik tiếp xúc với rap khá khó khăn vì không có ai hướng dẫn hay chỉ dạy nên mọi thứ phải tự mình mày mò. ' +
      'Từ flow, lyrics và beat cho đến cách tự thu âm và dần dần được cộng đồng Underground công nhận sau cuối năm 2009.',
      'https://vignette.wikia.nocookie.net/rapviet/images/7/71/Karik-1.jpg/revision/latest?cb=20180626060529&path-prefix=vi'
    );

    const artist10 = new Artist(
      10,
      'LDleKing',
      'Biết đến rap từ năm 12 tuổi qua việc nghe những nhạc sĩ nổi tiếng như Linkin Park, Eminem, Dr. Dre, Snoop Dogg, v.v… ' +
      'Lạ lẫm và tò mò vì sự thú vị và bắt tai của rap, LD tìm hiểu thêm và biết về thể loại rap Việt lúc bấy giờ còn non yếu ở Việt Nam' +
      'thông qua những huyền thoại như Khanh Nhỏ, Thái, Tiến Đạt và những rapper khác cùng thời với họ. ' +
      'Năm 14 tuổi LD gặp một nhóm bạn chung trường trung học và phát hiện họ có chung một đam mê là hip-hop với mình. ' +
      'Họ tụ họp lại để cùng làm nhạc với nhau và từ đó SouthGanZ ra đời với 4 thành viên là Wowy, LD, Buzz và Young K. ' +
      'Họ cùng đi diễn show và đưa tên tuổi của SouthGanZ đi lên' +
      'thông qua những bài nhạc mà họ thu âm tại gia và tung lên trên Soundclick. ' +
      'Nhiều người dần biết đến LDleKING và nhóm của a rộng rãi hơn thông qua những bài nhạc thô sơ đó.',
      'https://vignette.wikia.nocookie.net/rapviet/images/a/a5/Ld-0.jpg/revision/latest?cb=20180626083010&path-prefix=vi'
    );

    const artist11 = new Artist(
      11,
      'Ricky Star',
      'Trần Tiến sinh ngày 26 tháng 6 năm 1994 hay còn biết đến với nghệ danh là Ricky Star' +
      'là một rapper chuyên nghiệp kiêm nhà sản xuất âm nhạc người Việt Nam.' +
      'Anh bắt đầu với vai trò rapper ở miền Tây được biết đến rông rãi sau cuộc battle rap với B Ray.' +
      'Năm 2016 anh cùng với Pjpo hợp tác cho ra mắt ca khúc Lý cây bông, ca khúc mang đến một màu sắc mới trong rapviet' +
      'trong một show diễn cùng với B Ray cả hai đã làm hòa',
      'https://vignette.wikia.nocookie.net/rapviet/images/5/54/Ricky_star-1.jpg/revision/latest?cb=20180626073247&path-prefix=vi'
    );

    const artist12 = new Artist(
      12,
      'Koo',
      'Nguyễn Đức Bảo Trung hay còn được biết đến với cái tên Koo là một rapper người Việt Nam.' +
      'Anh nổi tiếng nhờ hit Call Me. Sau Call Me, Koo còn phát hành một số bài hát mang đậm chất chill của anh như Conme, Rơi . . .' +
      'anh từng xảy ra mau thuẫn với rapper B Ray khi phát hành bài hát Raplayer. ' +
      'Hiện tại, Koo hợp tác với nhiều ca sĩ như KayTrần, Dream, Andiez ,... ',
      'https://akphoto1.ask.fm/4eb/1bf88/3a2d/4d00/9732/8bd6984ee71e/original/1513682.jpg'
    );

    const artist13 = new Artist(
      13,
      'Cường Seven',
      'Ca sĩ,vũ Công và diễn viên Cường Seven sinh ngày 4-1-1989 tại Thành phố Hà Nội, nước Việt Nam. ' +
      'Anh sống và làm việc chủ yếu ở Thành phố Hồ Chí Minh, nước Việt Nam. ' +
      'Cường Seven tên khai sinh là Nguyễn Việt Cường, là một ca sĩ, vũ công kiêm diễn viên nổi tiếng Việt Nam. ' +
      'Với gương mặt điển trai, khả năng ca hát và vũ đạo tốt, từng là một trong những ca sĩ trẻ nổi đình nổi đám trong giới trẻ. ' +
      'Anh còn được viết đến qua mối tình 4 năm với hot girl nổi tiếng nhất Hà Thành-hot girl Chi Pu.',
      'https://vignette.wikia.nocookie.net/rapviet/images/1/18/Cuongseven-22.jpg/revision/latest?cb=20180626090234&path-prefix=vi'
    );

    const artist14 = new Artist(
      14,
      'Young H',
      'Young H (tên thật Nguyễn Đăng Khắc Hiếu) là Rapper tài năng trong làng Rap Việt. ' +
      'Young H khởi đầu sự nghiệp cùng nhóm SSR, sau này là FSR (Free Spirit Rap). ' +
      'Khi SSR là đối thủ đáng gờm với nhiều nhóm nhạc, Young H vẫn chưa thực sự nổi bật trong nhóm. ' +
      'Từ năm 2014, Young H được biết đến rộng rãi qua các bản Rap như: "All about You", "2 5". ' +
      'Giới chuyên môn và khán giả bắt đầu chú ý đến anh với tiềm năng chưa được khai phá của anh. ' +
     ' "Ông vua trong hood nhỏ", "Bạn của tao" có lẽ là đỉnh cao của Young H.',
     'https://vignette.wikia.nocookie.net/rapviet/images/b/b3/Youngh-0.jpg/revision/latest?cb=20180626060410&path-prefix=vi'
    );

    const artist15 = new Artist(
      15,
      'Nah',
      'Nah là 1 rapper chuyên nghiệp, kì cựu, nổi tiếng của underground VN. ' +
      'Anh có lyrics tốt, flow hay, điển hình là trong track 1 chọi 100 năm 2008' +
      '(Thời kì sơ khai của rap việt nhưng skill trong lyrics lại rất tốt dù so với hiện tại). ' +
      'Rapper này cũng vướng với nhiều tai tiếng liên quan đến chính trị, ' +
      'cụ thể là anh có track ĐMCS vào 2015 lên án chế độ ở VN lúc bấy giờ.',
      'https://vignette.wikia.nocookie.net/rapviet/images/3/35/Nah-1.jpg/revision/latest?cb=20180626061525&path-prefix=vi'
    );

    const artist16 = new Artist(
      16,
      'DSK',
      'Rapper DSK sinh ngày 23 tháng 11 năm 1987 tại Thành phố Hà Nội, nước Việt Nam. ' +
      'Thời niên thiếu,anh sống và làm việc chủ yếu ở Thành phố Bad Kissingen, nước Đức. ' +
      'DSK được cho là thần tượng của các thần tượng trong Rap Việt nhờ chất giọng và khả năng viết lyric tuyệt hảo. ' +
      'Anh được khán giả yêu mến qua những bản Rap chất ngầu như: Lớn Rồi, Chưa Bao Giờ, Đôi Bờ, Tự Xử, Thế Hệ Tao,... ' +
      ' đến bây giờ anh đã trở thành huyền thoại bất tử trong lòng người hâm mộ với những cống hiến to lớn cho nền Rap Việt Nam.',
      'https://vignette.wikia.nocookie.net/rapviet/images/f/fa/Dsk-1.jpeg/revision/latest?cb=20180626050916&path-prefix=vi'
    );

    const artist17 = new Artist(
      17,
      'Đen',
      'Tên thật là Nguyễn Đức Cường, Đen Vâu là một cái tên quen của giới Underground, ' +
      'với những bản Rap đầy tính tự sự, thể hiện suy nghĩ tâm tư của những bạn trẻ hiện nay, ' +
      'sống với đam mê và hết mình với tuổi trẻ. Mọi người biết đến với Đen Vâu qua các ca khúc như: ' +
      'Đưa nhau đi trốn, Cô gái bàn bên, Mơ ... Anh đã từng tham gia chương trình Muôn màu showbiz và để lại nhiều ấn tượng tốt đẹp.',
      'https://vignette.wikia.nocookie.net/rapviet/images/8/82/Den-0.jpg/revision/latest?cb=20180626062931&path-prefix=vi'
    );

    const artist18 = new Artist(
      18,
      'Andree',
      'Ca sĩ Andree sinh ngày 18-6-1987 tại Thành phố Toronto, nước Canada. ' +
      'Anh sống và làm việc chủ yếu ở Thành phố Hồ Chí Minh, nước Việt Nam. ' +
      'Anh sinh thuộc cung Song Tử, cầm tinh con (giáp) mèo (Đinh Mão 1987). ' +
      'Andree xếp hạng nổi tiếng thứ 882 trên thế giới và thứ 159 trong danh sách Ca sĩ nổi tiếng. ' +
      'Andree tên thật là Bùi Thế Anh. Anh là một trong những rapper Sài thành nổi tiếng nhất từ trước đến nay. ' +
      'Andree có một fan hâm mộ lớn ở Bắc Mỹ và Việt Nam. Andree rap hoàn toàn bằng tiếng Việt, ' +
      'trong khi châu Á hầu hết các rapper rap chỉ bằng tiếng Anh. Phong cách rap của Andree bao gồm "bling" và ' +
      'phong cách của rapper người Mỹ gốc Phi hiện hành. Lời bài hát của ah thể hiện quyến rũ ' +
      'và thời trang của văn hóa hip hop, bao gồm cả xe ô tô , dây chuyền vàng, các cô gái.',
      'https://vignette.wikia.nocookie.net/rapviet/images/f/fe/Andree-0.jpg/revision/latest?cb=20180626062612&path-prefix=vi'
    );

    const artist19 = new Artist(
      19,
      'Khói',
      'Khói đã sống và làm việc chủ yếu ở tại Thành phố Hồ Chí Minh, của nước Việt Nam. ' +
      'Anh sinh ra thuộc cung là Kim Ngưu, anh cầm tinh con khỉ (Nhâm Thân năm 1992). ' +
      'Khói xếp hạng nổi tiếng vào thứ 896 ở trên thế giới và đứng thứ 190 ở trong danh sách những Ca sĩ nổi tiếng. ' +
      'Anh làm nghề thợ xăm đồng thời là một nam ca sĩ rất thành công ở trong thể loại Rap love.',
      'https://vignette.wikia.nocookie.net/rapviet/images/7/72/Kh%C3%B3i-0.jpg/revision/latest?cb=20180626062506&path-prefix=vi'
    );

    const artist20 = new Artist(
      20,
      'VD',
      'VD a.k.a Việt Dragon là một rapper lắm tài nhiều tật, cả sự nghiệp rap của anh ta luôn gắn với những vụ beef và battle. ' +
      'VD là rapper Gangz hàng đầu Rap Việt thời bấy giờ, và có trình độ cao về Flow, lyrics, Voice ' +
      'bởi thế lên mic dizz nhau thì không ai bằng. Không thể phủ nhận tài năng và sự cống hiến với những' +
      'track Gangz mang những skill tuyệt vời tới cho Rap Việt. Phong cách Rap chủ yếu: Gangz',
      'https://vignette.wikia.nocookie.net/rapviet/images/3/3f/Vd-1.jpg/revision/latest?cb=20180626050819&path-prefix=vi'
    );

    this.listArtist.push(artist1);
    this.selectedArtist = artist1;
    this.listArtist.push(artist2);
    this.listArtist.push(artist3);
    this.listArtist.push(artist4);
    this.listArtist.push(artist5);
    this.listArtist.push(artist6);
    this.listArtist.push(artist7);
    this.listArtist.push(artist8);
    this.listArtist.push(artist9);
    this.listArtist.push(artist10);
    this.listArtist.push(artist11);
    this.listArtist.push(artist12);
    this.listArtist.push(artist13);
    this.listArtist.push(artist14);
    this.listArtist.push(artist15);
    this.listArtist.push(artist16);
    this.listArtist.push(artist17);
    this.listArtist.push(artist18);
    this.listArtist.push(artist19);
    this.listArtist.push(artist20);
  }

  loadDataDetail(id: number) {
    this.selectedArtist = this.listArtist.find(x => x._id === id);
  }
}
