export type CarVideo = { videoId: string; title: string; channel: string };

/**
 * One YouTube video per car, shown under the car photo.
 * Every videoId was checked against YouTube oEmbed (HTTP 200, title names the car or its film scene);
 * title and channel are the oEmbed title and author_name.
 * A car missing here falls back to a YouTube search link for "<nameEn> review".
 */
export const carVideos: Record<string, CarVideo> = {
  "nissan-gt-r-nismo-gt3": { videoId: "DdOsPhJOuno", title: "Nissan GT-R NISMO GT3 at Nurburgring 24h: Summary", channel: "日産自動車株式会社" },
  "ligier-js-px": { videoId: "dNGzapUzCe0", title: "Meet the Ligier JS PX", channel: "Ligier Automotive" },
  "nissan-370z": { videoId: "kK_wULpFAVE", title: "MotorWeek Road Test: 2009 Nissan 370Z", channel: "MotorWeek" },
  "nissan-gt-r-r35": { videoId: "AzFHfk2Vd7Y", title: "The 2017 Nissan GT-R | Chris Harris Drives | Top Gear", channel: "Top Gear" },
  "nissan-gt-r-nismo": { videoId: "QWU9YsxXPqw", title: "The Nissan GT-R Nismo Is the Most Expensive Nissan Ever", channel: "Doug DeMuro" },
  "zytek-z11sn": { videoId: "jdSqwwh8nx4", title: "Inside the Box - Greaves Motorsport Le Mans 24 Hours 2013", channel: "Eric Lux" },
  "ligier-js-p2": { videoId: "kzWNNfnvimg", title: "La Ligier JS P2 en piste ! - The Ligier JS P2 on track!", channel: "Ligier Automotive" },
  "nissan-gt-r-lm-nismo": { videoId: "fw_2N3tGMEg", title: "Nissan GT-R LM NISMO - Jay Leno's Garage", channel: "Jay Leno's Garage" },
  "porsche-911-gt3-rs-992": { videoId: "AIKlYlCzjdI", title: "The 2023 Porsche 911 GT3 RS 992 Is the Ultimate 911 For the Track", channel: "Doug DeMuro" },
  "volkswagen-corrado-vr6": { videoId: "GY5qOUSGQQY", title: "The Volkswagen Corrado VR6 sounds like a winner | Revelations with Jason Cammisa | Ep. 10", channel: "Hagerty" },
  "lamborghini-huracan-gt3": { videoId: "-Zk-Qxewngc", title: "Lamborghini Huracán GT3 EVO", channel: "Lamborghini" },
  "lamborghini-huracan-sto": { videoId: "9kdslWVKDb0", title: "Chris Harris vs Lambo Huracán STO: STANDOUT street car with a MASTERPIECE 5.2L V10 engine | Top Gear", channel: "Top Gear" },
  "koenigsegg-gemera": { videoId: "1mPmCDS66Qc", title: "The Koenigsegg Gemera is a Family Hypercar with 1700 Horsepower", channel: "Doug DeMuro" },
  "nissan-ariya": { videoId: "M4Jbvss-EOc", title: "The 2023 Nissan Ariya Is a Quirky New Electric Crossover", channel: "Doug DeMuro" },
  "ford-gt-2005": { videoId: "Bhgs6iyZSgg", title: "The 2005 Ford GT Is an Icon That You Can Use", channel: "Doug DeMuro" },
  "honda-nsx-r": { videoId: "TrULDVaMFFw", title: "Loafers & white socks: Driving the Honda NSX-R | Henry Catchpole - The Driver's Seat", channel: "Hagerty" },
  "audi-r8-lms-evo": { videoId: "JVhy_b8CPyA", title: "2019 Audi R8 LMS GT3 evo | fly-bys, downshifts and action", channel: "Belgian-Motorsport" },
};
