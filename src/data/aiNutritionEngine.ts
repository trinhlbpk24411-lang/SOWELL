import type { Product } from '../types/index';
import { PRODUCTS } from './productsData';

/**
 * ============================================================================
 * TRỢ LÝ TƯ VẤN DINH DƯỠNG SOWELL - KNOWLEDGE BASE 5 NHÓM (29 CHỦ ĐỀ CHUẨN)
 * - Trả lời chi tiết, chính xác theo nội dung trang web cho toàn bộ 29 câu hỏi
 *   thuộc 5 nhóm:
 *   1. Nhóm Tính Calo & Tư vấn Dinh dưỡng (Core AI Feature)
 *   2. Nhóm Chế độ ăn & Thành phần (Ăn kiêng, Dị ứng)
 *   3. Nhóm Tùy chỉnh Combo & Cá nhân hóa (Custom Combo)
 *   4. Nhóm Bảo quản & Hạn sử dụng
 *   5. Nhóm Đặt hàng, Giao hàng & Thanh toán
 * - Các câu hỏi nằm NGOÀI 5 nhóm này (hoặc bệnh lý phức tạp / yêu cầu gặp người thật)
 *   sẽ được AI thông báo và tự động chuyển tiếp sang Nhân viên tư vấn.
 * ============================================================================
 */

export interface SOWELLProductNutrition {
  name: string;
  servingSize: string;
  servingWeightGrams: number;
  servingsPerPack: string;
  caloriesPerServing: number;
  proteinPerServing: number;
  fatPerServing: number;
  satFatPerServing: number;
  carbsPerServing: number;
  sugarPerServing: number;
  fiberPerServing: number;
  sodiumPerServing: number;
  per100g: {
    calories: number;
    carbs: number;
    sugar: number;
    fat: number;
    satFat: number;
    protein: number;
    fiber: number;
    sodium: number;
  };
  ingredients: string;
  allergens: string[];
  sugarSources: string;
  crossContamination: string;
  texture: string;
  taste: string;
  shelfLife: string;
  openShelfLife: string;
  storage: string;
  reCrisp: string;
  veganSuitable: boolean;
  lactoOvoVegSuitable: boolean;
  shopNotice: string;
}

export const SOWELL_DATA: Record<'biscotti' | 'tuiles', SOWELLProductNutrition> = {
  biscotti: {
    name: 'Biscotti (3 vị: Original, Choco, Matcha)',
    servingSize: '50 g (khoảng 2 miếng)',
    servingWeightGrams: 50,
    servingsPerPack: 'Gói 100 g: 2 khẩu phần; gói 250 g: 5 khẩu phần',
    caloriesPerServing: 175,
    proteinPerServing: 7,
    fatPerServing: 4,
    satFatPerServing: 1.5,
    carbsPerServing: 28,
    sugarPerServing: 10,
    fiberPerServing: 3,
    sodiumPerServing: 90,
    per100g: {
      calories: 350,
      carbs: 56,
      sugar: 20,
      fat: 8,
      satFat: 3,
      protein: 14,
      fiber: 6,
      sodium: 180
    },
    ingredients: 'Bột mì nguyên cám, trứng gà, hạnh nhân, hạt điều, hạt bí xanh, bột mì, nho khô, bơ lạt, đường nâu, bột trà xanh, bột cacao, bột nở, muối.',
    allergens: ['Gluten (Bột mì)', 'Trứng', 'Hạnh nhân', 'Hạt điều', 'Sữa/Bơ động vật'],
    sugarSources: 'Đường nâu, nho khô',
    crossContamination: 'Nhãn không ghi thông tin về lây nhiễm chéo.',
    texture: 'Giòn chắc, cứng hơn bánh ngói, rất hợp nhúng cà phê, sữa hoặc trà.',
    taste: 'Ngọt vừa, vị hạt và nho khô thơm bùi.',
    shelfLife: 'Hạn sử dụng 3 tháng kể từ ngày sản xuất in trên bao bì.',
    openShelfLife: 'Giữ giòn khoảng 7 ngày nếu đậy kín.',
    storage: 'Không cần để tủ lạnh; tránh ẩm vì bánh dễ mềm.',
    reCrisp: 'Nướng hoặc làm nóng nhẹ ở 100–120°C trong 3–5 phút rồi để nguội.',
    veganSuitable: false,
    lactoOvoVegSuitable: true,
    shopNotice: 'Dùng 2–3 miếng trước buổi tập, ăn phụ thay snack, ăn sáng ăn vặt.'
  },
  tuiles: {
    name: 'Bánh ngói hạnh nhân (Tuiles Almond)',
    servingSize: '20 g (1 túi nhỏ gồm 2 bánh)',
    servingWeightGrams: 20,
    servingsPerPack: 'Gói 250 g: 12–13 khẩu phần (khoảng 24–26 bánh).',
    caloriesPerServing: 98,
    proteinPerServing: 1.8,
    fatPerServing: 6.2,
    satFatPerServing: 2.0,
    carbsPerServing: 8.8,
    sugarPerServing: 5.2,
    fiberPerServing: 0.8,
    sodiumPerServing: 24,
    per100g: {
      calories: 490,
      carbs: 44,
      sugar: 26,
      fat: 31,
      satFat: 10,
      protein: 9,
      fiber: 4,
      sodium: 120
    },
    ingredients: 'Hạnh nhân lát, lòng trắng trứng, đường trehalose, đường nâu hữu cơ, bột hạnh nhân, bột mì, bơ lạt, muối.',
    allergens: ['Hạnh nhân', 'Trứng', 'Gluten (Bột mì)', 'Sữa/Bơ động vật'],
    sugarSources: 'Đường trehalose, đường nâu hữu cơ',
    crossContamination: 'Nhãn không ghi thông tin về lây nhiễm chéo.',
    texture: 'Giòn rụm, mỏng, không bị cứng.',
    taste: 'Ngọt rất nhẹ, thơm bơ lạt, hạnh nhân bùi béo.',
    shelfLife: 'HSD 3 tháng, sản xuất mới mỗi ngày.',
    openShelfLife: 'Giữ giòn khoảng 5 ngày nếu đậy kín.',
    storage: 'Không cần để tủ lạnh; tránh ẩm vì bánh dễ mềm.',
    reCrisp: 'Nướng hoặc làm nóng nhẹ ở 100–120°C trong 3–5 phút rồi để nguội.',
    veganSuitable: false,
    lactoOvoVegSuitable: true,
    shopNotice: 'Mỗi túi nhỏ gồm 2 bánh (98 kcal) tiện lợi kiểm soát khẩu phần.'
  }
};

export const WHO_REFERENCE = {
  calories: 2000,
  freeSugarGrams: 50,
  satFatGrams: 22,
  sodiumMg: 2000,
  saltGrams: 5
};

export interface ServingCalculationResult {
  productName: string;
  servings: number;
  totalGrams: number;
  calories: number;
  carbs: number;
  sugar: number;
  fat: number;
  satFat: number;
  protein: number;
  fiber: number;
  sodium: number;
  saltGrams: number;
  sugarPercentageOfWHO: number;
  caloriesPercentageOfWHO: number;
  formulaText: string;
}

export function calculateServings(productKey: 'biscotti' | 'tuiles', servings: number): ServingCalculationResult {
  const p = SOWELL_DATA[productKey];
  const count = Math.max(1, servings);
  const totalGrams = p.servingWeightGrams * count;
  const calories = p.caloriesPerServing * count;
  const carbs = Math.round(p.carbsPerServing * count * 10) / 10;
  const sugar = Math.round(p.sugarPerServing * count * 10) / 10;
  const fat = Math.round(p.fatPerServing * count * 10) / 10;
  const satFat = Math.round(p.satFatPerServing * count * 10) / 10;
  const protein = Math.round(p.proteinPerServing * count * 10) / 10;
  const fiber = Math.round(p.fiberPerServing * count * 10) / 10;
  const sodium = Math.round(p.sodiumPerServing * count);
  const saltGrams = Math.round((sodium * 2.5 / 1000) * 10) / 10;

  const sugarPercentageOfWHO = Math.round((sugar / WHO_REFERENCE.freeSugarGrams) * 100);
  const caloriesPercentageOfWHO = Math.round((calories / WHO_REFERENCE.calories) * 100);

  const formulaText = `Phép tính cho ${count} khẩu phần (${totalGrams} g): Năng lượng = ${p.caloriesPerServing} × ${count} = ${calories} kcal; Đường = ${p.sugarPerServing}g × ${count} = ${sugar} g; Natri = ${p.sodiumPerServing}mg × ${count} = ${sodium} mg (~${saltGrams} g muối). Chiếm khoảng ${sugarPercentageOfWHO}% mốc đường và ${caloriesPercentageOfWHO}% mốc calo tham chiếu chung WHO (2.000 kcal/ngày).`;

  return {
    productName: p.name,
    servings: count,
    totalGrams,
    calories,
    carbs,
    sugar,
    fat,
    satFat,
    protein,
    fiber,
    sodium,
    saltGrams,
    sugarPercentageOfWHO,
    caloriesPercentageOfWHO,
    formulaText
  };
}

export function getSafeProductsExcluding(excludedKeywords: string[]): Product[] {
  return PRODUCTS.filter(prod => {
    for (const allergen of prod.allergens) {
      for (const kw of excludedKeywords) {
        if (allergen.toLowerCase().includes(kw.toLowerCase())) {
          return false;
        }
      }
    }
    for (const ing of prod.ingredients) {
      for (const kw of excludedKeywords) {
        if (ing.toLowerCase().includes(kw.toLowerCase())) {
          return false;
        }
      }
    }
    return true;
  });
}

// Danh mục 5 Nhóm - 29 Câu hỏi được huấn luyện đầy đủ cho AI
export interface TrainedQuestionGroup {
  groupId: string;
  groupTitle: string;
  shortLabel: string;
  questions: string[];
}

export const TRAINED_FAQ_GROUPS: TrainedQuestionGroup[] = [
  {
    groupId: 'group-1',
    groupTitle: 'Tính Calo & Tư vấn Dinh dưỡng',
    shortLabel: 'Calo & Dinh dưỡng',
    questions: [
      'Một thanh bánh ngũ cốc SOWELL chứa bao nhiêu calo (kcal)?',
      'Tôi đang muốn giảm cân/giảm mỡ thì nên ăn loại bánh nào và ăn vào thời điểm nào?',
      'Tôi tập gym/tăng cơ có ăn bánh SOWELL được không? Lượng protein trong mỗi thanh là bao nhiêu?',
      'Bánh này có thay thế bữa ăn chính (sáng/trưa/tối) được không?',
      'Ăn bánh ngũ cốc SOWELL vào buổi tối hay trước khi đi ngủ có bị béo không?',
      'Một ngày tôi nên ăn tối đa bao nhiêu thanh bánh?',
      'Chỉ số đường huyết (GI) của bánh là bao nhiêu, có gây tích mỡ không?'
    ]
  },
  {
    groupId: 'group-2',
    groupTitle: 'Chế độ ăn & Thành phần (Ăn kiêng, Dị ứng)',
    shortLabel: 'Ăn kiêng & Dị ứng',
    questions: [
      'Tôi bị tiểu đường / đường huyết cao thì có ăn được bánh này không?',
      'Bánh có sử dụng đường tinh luyện không? Thương hiệu dùng chất tạo ngọt gì?',
      'Tôi ăn kiêng theo chế độ Eat Clean / Keto / Das / Low-carb thì chọn loại nào?',
      'Sản phẩm có dùng cho người ăn chay (Vegan / Ăn chay trường) được không?',
      'Tôi bị dị ứng đậu phộng / hạt điều / hải sản / gluten, sản phẩm nào an toàn cho tôi?',
      'Mẹ bầu, phụ nữ mang thai hoặc đang cho con bú có dùng được không?',
      'Trẻ em mấy tuổi thì bắt đầu ăn được bánh ngũ cốc SOWELL?',
      'Bánh có chứa chất bảo quản, phụ gia hay màu thực phẩm nhân tạo không?'
    ]
  },
  {
    groupId: 'group-3',
    groupTitle: 'Tùy chỉnh Combo & Cá nhân hóa',
    shortLabel: 'Combo Mix Vị',
    questions: [
      'Tôi muốn tự chọn các vị bánh khác nhau vào chung một hộp combo có được không?',
      'Làm sao để hệ thống tự lọc ra combo bánh dành riêng cho người không ăn được hạt điều?',
      'Mua theo Combo 6 thanh hoặc 12 thanh thì được giảm giá bao nhiêu %?',
      'Tôi có thể chọn combo mix sẵn theo mục tiêu (VD: Combo Giảm Cân, Combo Tăng Cơ) không?'
    ]
  },
  {
    groupId: 'group-4',
    groupTitle: 'Bảo quản & Hạn sử dụng',
    shortLabel: 'Bảo quản & HSD',
    questions: [
      'Bánh ngũ cốc SOWELL hạn sử dụng được bao lâu kể từ ngày sản xuất?',
      'Cách bảo quản bánh như thế nào? Có cần bỏ vào tủ lạnh không?',
      'Nếu tôi xé bao bì ra nhưng chưa ăn hết thì bảo quản ra sao?',
      'Bánh bị mềm hoặc gãy trong quá trình vận chuyển thì xử lý thế nào?'
    ]
  },
  {
    groupId: 'group-5',
    groupTitle: 'Đặt hàng, Giao hàng & Thanh toán',
    shortLabel: 'Đặt hàng & Ship',
    questions: [
      'Phí ship tính như thế nào? Đơn hàng bao nhiêu thì được Freeship?',
      'Tôi ở [Tên Tỉnh/Thành phố] thì đặt hàng sau bao lâu nhận được?',
      'Website hỗ trợ những hình thức thanh toán nào (MoMo, VNPay, COD, Chuyển khoản)?',
      'Tôi có thể kiểm tra hàng (đồng kiểm) trước khi thanh toán cho shipper không?',
      'Chính sách đổi trả hàng bị lỗi hoặc giao sai vị như thế nào?',
      'SOWELL có xuất hóa đơn VAT cho doanh nghiệp khi mua làm quà tặng không?'
    ]
  }
];

export interface AIAnswerResponse {
  text: string;
  recommendedProduct?: Product;
  quickReplies?: string[];
  level?: 1 | 2 | 3 | 4 | 'emergency' | 'eating_disorder' | 'forbidden' | 'out_of_scope' | 'human_handoff';
  needsHumanHandoff?: boolean;
  handoffReason?: string;
  openComboBuilderAction?: boolean;
}

/**
 * Phản hồi từ Nhân viên tư vấn trực tiếp (khi câu hỏi nằm ngoài 5 nhóm hoặc bệnh lý phức tạp)
 */
export function processHumanConsultantReply(question: string): AIAnswerResponse {
  const q = question.toLowerCase().trim();
  const sesameRedbeanProd = PRODUCTS.find(p => p.id === 'sowell-bar-sesame-redbean-protein') || PRODUCTS[6];

  if (/0\d{8,10}/.test(q)) {
    return {
      text: 'Dạ mình đã ghi nhận số điện thoại của bạn rồi ạ! Bộ phận Chuyên viên Tư vấn của SOWELL sẽ liên hệ trực tiếp qua điện thoại/Zalo trong ít phút nữa để hỗ trợ chi tiết nhất cho bạn nhé.',
      quickReplies: ['Xem dòng bánh 0g Đường', 'Quay lại hỏi AI']
    };
  }

  return {
    text: 'Dạ mình đã ghi nhận câu hỏi riêng của bạn ạ. Với yêu cầu chuyên sâu này, mình đang kiểm tra trực tiếp cùng bộ phận chuyên môn và xưởng sản xuất SOWELL để giải đáp chuẩn xác nhất cho bạn. Bạn có thể chia sẻ thêm thông tin hoặc để lại **Số điện thoại / Zalo** để mình hỗ trợ 1-1 ngay nhé!',
    recommendedProduct: sesameRedbeanProd,
    quickReplies: ['Liên hệ Zalo: 0988123456', 'Tư vấn khẩu phần ăn phù hợp giúp mình']
  };
}

/**
 * ENGINE TRẢ LỜI CHI TIẾT CHO 29 CÂU HỎI THUỘC 5 NHÓM CỦA WEBSITE SOWELL.
 * NẾU CÂU HỎI NẰM NGOÀI 29 CHỦ ĐỀ NÀY (HOẶC BỆNH LÝ NẶNG PHỨC TẠP), AI SẼ THÔNG BÁO VÀ CHUYỂN NHÂN VIÊN.
 */
export function processUserQuestion(question: string): AIAnswerResponse {
  const q = question.toLowerCase().trim();

  const biscottiProd = PRODUCTS.find(p => p.id === 'sowell-biscotti-3-flavors') || PRODUCTS[0];
  const tuilesProd = PRODUCTS.find(p => p.id === 'sowell-tuiles-almond') || PRODUCTS[1];
  const maccaOatProd = PRODUCTS.find(p => p.id === 'sowell-bar-macca-oat') || PRODUCTS[2];
  const chocoAlmondProd = PRODUCTS.find(p => p.id === 'sowell-bar-dark-choco-almond') || PRODUCTS[3];
  const matchaCashewProd = PRODUCTS.find(p => p.id === 'sowell-bar-matcha-berry-cashew') || PRODUCTS[4];
  const walnutBananaProd = PRODUCTS.find(p => p.id === 'sowell-bar-walnut-banana') || PRODUCTS[5];
  const sesameRedbeanProd = PRODUCTS.find(p => p.id === 'sowell-bar-sesame-redbean-protein') || PRODUCTS[6];
  const granolaJarProd = PRODUCTS.find(p => p.id === 'sowell-granola-supernuts-jar') || PRODUCTS[7];
  const pumpkinRedDateProd = PRODUCTS.find(p => p.id === 'sowell-bar-pumpkin-red-date') || PRODUCTS[8];
  const peanutChiaProd = PRODUCTS.find(p => p.id === 'sowell-bar-peanut-butter-chia') || PRODUCTS[9];

  // ==========================================================================
  // 0. KIỂM TRA CÁC TÌNH HUỐNG Y TẾ KHẨN CẤP / BỆNH LÝ NẶNG NGOÀI PHẠM VI 29 CÂU
  //    HOẶC KHÁCH CHỦ ĐỘNG YÊU CẦU GẶP NHÂN VIÊN -> CHUYỂN NHÂN VIÊN TƯ VẤN
  // ==========================================================================
  if (
    q.includes('gặp nhân viên') ||
    q.includes('chuyển nhân viên') ||
    q.includes('nhân viên tư vấn') ||
    q.includes('tư vấn viên') ||
    q.includes('người thật')
  ) {
    return {
      text: '🔔 **Thông báo từ Trợ lý AI:** Mình xin phép chuyển cuộc trò chuyện sang cho **Nhân viên tư vấn SOWELL** để hỗ trợ trực tiếp cho bạn ngay bây giờ nhé!',
      level: 'human_handoff',
      needsHumanHandoff: true,
      handoffReason: 'Khách hàng yêu cầu kết nối trực tiếp với nhân viên tư vấn'
    };
  }

  // Các bệnh lý nặng / y khoa chuyên sâu nằm ngoài 29 câu hỏi tiêu chuẩn
  if (
    q.includes('khó thở') ||
    q.includes('sưng môi') ||
    q.includes('sốc phản vệ') ||
    q.includes('suy thận') ||
    q.includes('bệnh thận') ||
    q.includes('chạy thận') ||
    q.includes('xơ gan') ||
    q.includes('bệnh gan') ||
    q.includes('ung thư') ||
    q.includes('hóa trị') ||
    q.includes('gout') ||
    q.includes('bệnh gút') ||
    q.includes('đau dạ dày') ||
    q.includes('viêm loét dạ dày') ||
    q.includes('trào ngược') ||
    q.includes('cao huyết áp') ||
    q.includes('tim mạch') ||
    q.includes('suy tim') ||
    q.includes('mỡ máu') ||
    q.includes('tuyến giáp') ||
    q.includes('phẫu thuật') ||
    q.includes('ép nôn') ||
    q.includes('rối loạn ăn uống')
  ) {
    return {
      text: '⚠️ **Thông báo từ Trợ lý AI:** Câu hỏi của bạn liên quan trực tiếp đến **tình trạng bệnh lý / sức khỏe y khoa chuyên sâu** nằm ngoài phạm vi tư vấn tự động của AI.\n\nĐể đảm bảo an toàn tuyệt đối cho sức khỏe của bạn, AI xin phép **chuyển cuộc trò chuyện này sang cho Nhân viên tư vấn & Chuyên viên Dinh dưỡng của SOWELL** để trực tiếp hỗ trợ bạn ngay bây giờ ạ!',
      level: 'human_handoff',
      needsHumanHandoff: true,
      handoffReason: 'Câu hỏi liên quan trực tiếp đến bệnh lý & vấn đề sức khỏe chuyên sâu'
    };
  }

  // ==========================================================================
  // NHÓM 3: TÙY CHỈNH COMBO & CÁ NHÂN HÓA (4 CÂU HỎI)
  // (Ưu tiên bắt từ khóa "combo", "hộp 6", "hộp 12", "lọc... hạt điều" trước)
  // ==========================================================================

  // Q3.2: "Làm sao để hệ thống tự lọc ra combo bánh dành riêng cho người không ăn được hạt điều?"
  if (
    (q.includes('làm sao') || q.includes('cách') || q.includes('lọc')) &&
    (q.includes('combo') || q.includes('hộp')) &&
    (q.includes('hạt điều') || q.includes('dị ứng'))
  ) {
    return {
      text: `Để hệ thống tự động lọc ra hộp Combo bánh **không chứa hạt điều** (hoặc bất kỳ thành phần dị ứng nào), bạn chỉ cần thực hiện 2 bước cực kỳ đơn giản trên website SOWELL:\n\n1. **Bước 1:** Bấm vào nút **"Combo Mix Vị"** trên thanh menu (hoặc nút *Chọn vị Combo ngay* ở trang chủ) để mở giao diện **COMBO Mix Vị Tự Chọn**.\n2. **Bước 2:** Tại góc phải phía trên danh sách vị bánh, bấm vào nút **"Lọc dị ứng"** → Chọn ô **"Hạt điều"** (nhãn sẽ gạch ngang màu đỏ).\n\n✨ **Kết quả:** Hệ thống sẽ **tự động loại bỏ ngay lập tức** các thanh bánh có chứa hạt điều (như *Bánh Hạt Điều & Nam Việt Quất Uji Matcha*) khỏi danh sách và khỏi khay hộp của bạn, chỉ giữ lại 6 vị bánh an toàn 100% không chứa hạt điều để bạn yên tâm phối hộp! Ngoài ra bạn cũng có thể chọn gói phối sẵn **"Không Hạt Vỏ Cứng (Nut-Free)"** chỉ với 1 chạm.`,
      recommendedProduct: sesameRedbeanProd,
      openComboBuilderAction: true,
      quickReplies: [
        'Mua theo Combo 6 thanh hoặc 12 thanh thì được giảm giá bao nhiêu %?',
        'Tôi có thể chọn combo mix sẵn theo mục tiêu (VD: Combo Giảm Cân, Combo Tăng Cơ) không?',
        'Tôi bị dị ứng đậu phộng / hạt điều / hải sản / gluten, sản phẩm nào an toàn cho tôi?'
      ],
      level: 1
    };
  }

  // Q3.3: "Mua theo Combo 6 thanh hoặc 12 thanh thì được giảm giá bao nhiêu %?"
  if (
    (q.includes('combo') || q.includes('6 thanh') || q.includes('12 thanh') || q.includes('24 thanh')) &&
    (q.includes('giảm giá') || q.includes('bao nhiêu %') || q.includes('ưu đãi') || q.includes('tiết kiệm'))
  ) {
    return {
      text: `Khi đặt mua tại tính năng **COMBO Mix Vị Tự Chọn**, hệ thống SOWELL tự động giảm giá trực tiếp trên tổng giá lẻ các thanh bánh bạn chọn theo 3 mức ưu đãi hấp dẫn:\n\n- **Hộp Trải Nghiệm (6 Thanh):** Giảm ngay **10%** *(Phù hợp ăn thử 1 tuần)*.\n- **Hộp Tiết Kiệm (12 Thanh – Bán chạy nhất):** Giảm ngay **18%** *(Tiết kiệm khoảng 60.000₫ – 68.000₫/hộp)*.\n- **Hộp Gia Đình (24 Thanh – Ưu đãi cao nhất):** Giảm ngay **25%** + **Miễn phí vận chuyển (Freeship)** toàn quốc!\n\n🎁 **Đặc quyền kèm theo:** Tất cả các hộp Combo đều được đóng trong hộp quà SOWELL cứng cáp và **tặng kèm thiệp viết tay miễn phí** theo lời nhắn riêng của bạn.`,
      recommendedProduct: maccaOatProd,
      openComboBuilderAction: true,
      quickReplies: [
        'Tôi muốn tự chọn các vị bánh khác nhau vào chung một hộp combo có được không?',
        'Tôi có thể chọn combo mix sẵn theo mục tiêu (VD: Combo Giảm Cân, Combo Tăng Cơ) không?',
        'Phí ship tính như thế nào? Đơn hàng bao nhiêu thì được Freeship?'
      ],
      level: 1
    };
  }

  // Q3.4: "Tôi có thể chọn combo mix sẵn theo mục tiêu (VD: Combo Giảm Cân, Combo Tăng Cơ) không?"
  if (
    q.includes('mix sẵn') ||
    q.includes('phối sẵn') ||
    (q.includes('combo') && (q.includes('mục tiêu') || q.includes('giảm cân') || q.includes('tăng cơ')))
  ) {
    return {
      text: `**Hoàn toàn được ạ!** Ngay trong cửa sổ **COMBO Mix Vị Tự Chọn**, SOWELL đã thiết kế sẵn **8 gói Gợi ý phối nhanh theo mục tiêu & chế độ ăn** (chỉ cần bấm 1 chạm là hệ thống tự động chia đều các vị chuẩn vào hộp):\n\n1. **Eat Clean & Giảm Mỡ (≤ 142 kcal):** Tự động phối 3 vị ít calo nhất (*Hạt Bí Táo Đỏ 135 kcal, Uji Matcha 138 kcal, Macca Yến Mạch 142 kcal*).\n2. **Tập Gym & Tăng Cơ (Giàu Protein):** Tự động phối 3 vị giàu đạm nhất (*Bơ Đậu Phộng 10.2g đạm, Mè Đen 9.5g đạm, Socola Đen 8.2g đạm*).\n3. **Keto & Tiểu Đường (0g – 1g Đường):** Phối các vị dùng cỏ ngọt Stevia, Net-Carb cực thấp.\n4. **Thuần Chay (Vegan 100%):** Hoàn toàn từ thực vật.\n5. **Mẹ Bầu & Dưỡng Nhan:** Giàu Omega-3, Sắt và Canxi tự nhiên.\n6. **Không Hạt Vỏ Cứng (Nut-Free):** Dành riêng cho người dị ứng hạt.\n7. **Mix Bán Chạy Nhất** & **Trải Nghiệm Đủ 7 Vị**.\n\n💡 Sau khi chọn gói mix sẵn, bạn vẫn có thể bấm nút **(+) / (-)** để tăng giảm lại từng vị theo ý thích trước khi thêm vào giỏ hàng!`,
      recommendedProduct: peanutChiaProd,
      openComboBuilderAction: true,
      quickReplies: [
        'Mua theo Combo 6 thanh hoặc 12 thanh thì được giảm giá bao nhiêu %?',
        'Làm sao để hệ thống tự lọc ra combo bánh dành riêng cho người không ăn được hạt điều?',
        'Tôi muốn tự chọn các vị bánh khác nhau vào chung một hộp combo có được không?'
      ],
      level: 1
    };
  }

  // Q3.1: "Tôi muốn tự chọn các vị bánh khác nhau vào chung một hộp combo có được không?"
  if (
    (q.includes('tự chọn') || q.includes('tự phối') || q.includes('mix các vị') || q.includes('vị bánh khác nhau') || q.includes('chung một hộp')) &&
    (q.includes('combo') || q.includes('hộp'))
  ) {
    return {
      text: `**Dạ hoàn toàn được ạ!** Trên website SOWELL có tính năng **"COMBO Mix Vị Tự Chọn"** giúp bạn tự do thiết kế hộp bánh theo đúng sở thích cá nhân:\n\n- **Mix tự do không giới hạn:** Bạn có thể chọn bất kỳ vị nào trong **7 hương vị bánh thanh ngũ cốc SOWELL** (mỗi vị 1 thanh, 2 thanh hay nhiều thanh tùy ý) vào chung một hộp **6 thanh (-10%), 12 thanh (-18%) hoặc 24 thanh (-25%)**.\n- **Theo dõi trực quan:** Khi bạn bấm chọn từng vị, **Khay hộp trực quan** bên phải sẽ hiển thị rõ hình ảnh từng thanh bánh trong các ô, đồng thời tính toán trực tiếp **Trung bình Calo/thanh** và **Tổng lượng Protein** của cả hộp.\n- **Tặng thiệp miễn phí:** Bạn còn có thể nhập lời chúc để SOWELL chuẩn bị thiệp viết tay đính kèm hộp quà miễn phí!`,
      recommendedProduct: maccaOatProd,
      openComboBuilderAction: true,
      quickReplies: [
        'Mua theo Combo 6 thanh hoặc 12 thanh thì được giảm giá bao nhiêu %?',
        'Tôi có thể chọn combo mix sẵn theo mục tiêu (VD: Combo Giảm Cân, Combo Tăng Cơ) không?',
        'Làm sao để hệ thống tự lọc ra combo bánh dành riêng cho người không ăn được hạt điều?'
      ],
      level: 1
    };
  }

  // ==========================================================================
  // NHÓM 1: TÍNH CALO & TƯ VẤN DINH DƯỠNG (7 CÂU HỎI)
  // ==========================================================================

  // Q1.1: "Một thanh bánh ngũ cốc SOWELL chứa bao nhiêu calo (kcal)?"
  if (
    (q.includes('bao nhiêu calo') || q.includes('bao nhiêu kcal') || q.includes('mức calo') || q.includes('chứa bao nhiêu calo')) &&
    (q.includes('một thanh') || q.includes('1 thanh') || q.includes('thanh bánh') || q.includes('bánh ngũ cốc') || q.includes('sowell'))
  ) {
    return {
      text: `Mỗi thanh bánh ngũ cốc dinh dưỡng SOWELL (trọng lượng 35g – 40g) chứa từ **135 đến 172 kcal**, được công bố minh bạch trên nhãn từng vị như sau:\n\n1. **Bánh Thanh Hạt Bí Xanh & Táo Đỏ Kỷ Tử (35g):** **135 kcal** *(Ít calo nhất – 6.8g Đạm, 5.2g Xơ)*\n2. **Bánh Thanh Hạt Điều & Nam Việt Quất Uji Matcha (35g):** **138 kcal** *(6.0g Đạm, 4.2g Xơ)*\n3. **Bánh Thanh Macca & Yến Mạch Mật Dừa (35g):** **142 kcal** *(6.5g Đạm, 4.8g Xơ)*\n4. **Bánh Thanh Protein Mè Đen & Đậu Đỏ (35g):** **148 kcal** *(9.5g Đạm, 6.0g Xơ, 0g Đường)*\n5. **Bánh Thanh Socola Đen 85% & Hạnh Nhân (38g):** **158 kcal** *(8.2g Đạm, 5.1g Xơ, 0.8g Đường)*\n6. **Bánh Granola Quả Óc Chó & Chuối Sấy Dẻo (36g):** **165 kcal** *(7.0g Đạm, 4.6g Xơ)*\n7. **Bánh Thanh Bơ Đậu Phộng & Hạt Chia Giòn (40g):** **172 kcal** *(10.2g Đạm, 4.5g Xơ)*\n\n📌 *Các dòng sản phẩm khác:* **Bánh Ngói Hạnh Nhân:** **98 kcal**/túi 20g (2 bánh); **Biscotti (3 vị):** **175 kcal**/khẩu phần 50g (~2 miếng); **Hũ Granola Siêu Hạt:** **182 kcal**/khẩu phần 40g.`,
      recommendedProduct: pumpkinRedDateProd,
      quickReplies: [
        'Tôi đang muốn giảm cân/giảm mỡ thì nên ăn loại bánh nào và ăn vào thời điểm nào?',
        'Một ngày tôi nên ăn tối đa bao nhiêu thanh bánh?',
        'Chỉ số đường huyết (GI) của bánh là bao nhiêu, có gây tích mỡ không?'
      ],
      level: 1
    };
  }

  // Q1.2: "Tôi đang muốn giảm cân/giảm mỡ thì nên ăn loại bánh nào và ăn vào thời điểm nào?"
  if (
    (q.includes('giảm cân') || q.includes('giảm mỡ') || q.includes('ít calo nhất') || q.includes('thấp calo')) &&
    !q.includes('combo')
  ) {
    return {
      text: `Nếu bạn đang trong chế độ **giảm cân / siết mỡ**, SOWELL gợi ý cho bạn **3 dòng bánh ít calo – giàu xơ – đường huyết thấp** cùng thời điểm ăn tối ưu nhất:\n\n**1. Các loại bánh khuyên dùng để giảm mỡ:**\n- **Bánh Thanh Hạt Bí Xanh & Táo Đỏ Kỷ Tử:** Chỉ **135 kcal/thanh** (thấp calo nhất), giàu 5.2g chất xơ và 6.8g đạm giúp no lâu.\n- **Bánh Thanh Hạt Điều & Nam Việt Quất Uji Matcha:** Chỉ **138 kcal/thanh**, chứa hoạt chất chống oxy hóa EGCG từ trà xanh Uji Nhật Bản hỗ trợ tăng cường trao đổi chất.\n- **Bánh Thanh Protein Mè Đen & Đậu Đỏ:** **148 kcal**, **0g đường**, giàu tới **6.0g chất xơ** và **9.5g đạm thực vật** giúp giữ cơ và cắt cơn thèm ăn vặt.\n- **Bánh Ngói Hạnh Nhân:** Chỉ **98 kcal** / 1 túi nhỏ 20g (2 bánh).\n\n**2. Thời điểm ăn tốt nhất không lo tích mỡ:**\n- **Bữa sáng nhanh (7:00 – 8:30):** Dùng 1 thanh bánh + 1 cốc sữa hạt không đường hoặc trà ấm.\n- **Bữa xế chiều (15:00 – 16:00):** Thời điểm vàng giúp nạp năng lượng sạch, cắt đứt cơn thèm trà sữa/đồ ngọt chiều và giúp bạn ăn ít tinh bột hơn vào bữa tối.\n- **Trước khi tập thể dục 30 – 45 phút:** Giúp cơ thể có sức bền đốt mỡ hiệu quả hơn.`,
      recommendedProduct: pumpkinRedDateProd,
      quickReplies: [
        'Ăn bánh ngũ cốc SOWELL vào buổi tối hay trước khi đi ngủ có bị béo không?',
        'Bánh này có thay thế bữa ăn chính (sáng/trưa/tối) được không?',
        'Chỉ số đường huyết (GI) của bánh là bao nhiêu, có gây tích mỡ không?'
      ],
      level: 1
    };
  }

  // Q1.3: "Tôi tập gym/tăng cơ có ăn bánh SOWELL được không? Lượng protein trong mỗi thanh là bao nhiêu?"
  if (
    q.includes('gym') ||
    q.includes('tăng cơ') ||
    q.includes('protein') ||
    q.includes('lượng đạm') ||
    q.includes('bao nhiêu đạm')
  ) {
    return {
      text: `**Rất phù hợp cho người tập Gym & Tăng cơ!** Mỗi thanh bánh ngũ cốc SOWELL cung cấp từ **6.0g đến 10.2g Protein thực vật** chất lượng cao (từ các loại hạt kết hợp đạm đậu hà lan phân lập Pea Protein Isolate).\n\n💪 **Bảng hàm lượng Protein chi tiết trong từng sản phẩm:**\n1. **Bánh Thanh Bơ Đậu Phộng & Hạt Chia (40g):** **10.2g Protein** *(172 kcal, 1.0g đường)* – Đứng đầu về lượng đạm, giữ nước cho cơ bắp.\n2. **Bánh Thanh Protein Mè Đen & Đậu Đỏ (35g):** **9.5g Protein** *(148 kcal, 0g đường, 25% Canxi)* – Tối ưu phục hồi và siết cơ nạc (Lean Muscle).\n3. **Hũ Granola Siêu Hạt Nướng Mộc (khẩu phần 40g):** **8.8g Protein** *(182 kcal)*.\n4. **Bánh Thanh Socola Đen 85% & Hạnh Nhân (38g):** **8.2g Protein** *(158 kcal, 0.8g đường)*.\n5. **Bánh Granola Quả Óc Chó & Chuối Dẻo (36g):** **7.0g Protein** *(165 kcal)*.\n6. **Biscotti 3 vị (khẩu phần 50g):** **7.0g Protein** *(175 kcal)*.\n7. **Bánh Hạt Bí Táo Đỏ (6.8g Protein)**, **Bánh Macca Yến Mạch (6.5g Protein)**, **Bánh Uji Matcha (6.0g Protein)**.\n\n⚡ *Gợi ý cho Gymer:* Ăn 1 thanh trước buổi tập 30–45 phút (Pre-workout) để duy trì sức bền, hoặc ăn sau tập kèm Whey / sữa chua Hy Lạp để nuôi dưỡng cơ bắp!`,
      recommendedProduct: peanutChiaProd,
      quickReplies: [
        'Tôi có thể chọn combo mix sẵn theo mục tiêu (VD: Combo Giảm Cân, Combo Tăng Cơ) không?',
        'Một ngày tôi nên ăn tối đa bao nhiêu thanh bánh?',
        'Bánh này có thay thế bữa ăn chính (sáng/trưa/tối) được không?'
      ],
      level: 1
    };
  }

  // Q1.4: "Bánh này có thay thế bữa ăn chính (sáng/trưa/tối) được không?"
  if (
    q.includes('thay thế bữa') ||
    q.includes('bữa ăn chính') ||
    q.includes('thay bữa sáng') ||
    q.includes('thay bữa trưa') ||
    q.includes('thay bữa tối') ||
    (q.includes('sáng') && q.includes('trưa') && q.includes('tối'))
  ) {
    return {
      text: `Về việc dùng bánh SOWELL thay thế bữa ăn chính (sáng/trưa/tối), bạn có thể áp dụng khoa học như sau:\n\n- **Đối với Bữa Sáng (Hoàn toàn thay thế được):** 1 – 2 thanh bánh ngũ cốc SOWELL (hoặc 40g Granola Siêu Hạt) kết hợp cùng **1 hộp sữa chua không đường / 1 ly sữa hạt / 1 quả táo** sẽ cung cấp khoảng **250 – 350 kcal**, đầy đủ tinh bột hấp thu chậm từ yến mạch Úc, đạm thực vật (6g–10g) và chất béo tốt từ hạt, giúp bạn có bữa sáng nhanh gọn trong 60 giây mà vẫn no lâu đến trưa.\n- **Đối với Bữa Trưa & Bữa Tối (Không nên thay thế hoàn toàn bằng 1 thanh bánh đơn lẻ):** Mỗi thanh bánh (135 – 172 kcal) được thiết kế chuẩn làm **bữa ăn phụ (Healthy Snack)**. Cơ thể vẫn cần thêm rau xanh, vitamin tươi và lượng đạm đầy đủ từ bữa trưa/tối chính. Nếu bạn muốn ăn tối nhẹ nhàng giữ dáng, hãy kết hợp 1 thanh bánh hoặc 3 thìa Granola trộn cùng một đĩa Salad ức gà/trứng luộc và trái cây tươi nhé!`,
      recommendedProduct: maccaOatProd,
      quickReplies: [
        'Ăn bánh ngũ cốc SOWELL vào buổi tối hay trước khi đi ngủ có bị béo không?',
        'Một ngày tôi nên ăn tối đa bao nhiêu thanh bánh?',
        'Một thanh bánh ngũ cốc SOWELL chứa bao nhiêu calo (kcal)?'
      ],
      level: 1
    };
  }

  // Q1.5: "Ăn bánh ngũ cốc SOWELL vào buổi tối hay trước khi đi ngủ có bị béo không?"
  if (
    (q.includes('buổi tối') || q.includes('trước khi đi ngủ') || q.includes('ban đêm') || q.includes('ăn đêm') || q.includes('ăn khuya')) &&
    (q.includes('béo') || q.includes('mập') || q.includes('tăng cân') || q.includes('ăn bánh'))
  ) {
    return {
      text: `Ăn bánh ngũ cốc SOWELL vào buổi tối **không gây béo** nếu nằm trong tổng mức năng lượng (Calo) trong ngày của bạn, nhờ 3 lý do khoa học:\n\n1. **Calo thấp & kiểm soát rõ ràng:** Mỗi thanh chỉ từ **135 – 158 kcal** (thấp hơn rất nhiều so với mì gói ~400 kcal hay bánh ngọt công nghiệp ~300 kcal).\n2. **Không đường tinh luyện & Chỉ số đường huyết thấp (Low GI = 35):** Không làm đường huyết tăng vọt vào ban đêm, nhờ đó không kích thích hormone Insulin tích trữ mỡ thừa ở vùng bụng.\n3. **Giàu chất xơ (4.8g – 6.0g) & Đạm thực vật:** Giúp xoa dịu cơn đói cồn cào nhanh chóng.\n\n🌙 **Lời khuyên khi ăn tối / ăn khuya:**\n- Nên chọn các dòng **0g đường / ít đường** như **Bánh Protein Mè Đen & Đậu Đỏ (0g đường, 148 kcal)**, **Bánh Socola Đen 85% (0.8g đường, 158 kcal)** hoặc **Bánh Hạt Bí Táo Đỏ (135 kcal)**.\n- Chỉ nên ăn **nửa thanh đến 1 thanh** cùng một cốc nước ấm, và tốt nhất nên ăn **trước khi nằm ngủ ít nhất 1.5 – 2 giờ** để dạ dày tiêu hóa nhẹ nhàng.`,
      recommendedProduct: chocoAlmondProd,
      quickReplies: [
        'Chỉ số đường huyết (GI) của bánh là bao nhiêu, có gây tích mỡ không?',
        'Một ngày tôi nên ăn tối đa bao nhiêu thanh bánh?',
        'Tôi đang muốn giảm cân/giảm mỡ thì nên ăn loại bánh nào và ăn vào thời điểm nào?'
      ],
      level: 1
    };
  }

  // Q1.6: "Một ngày tôi nên ăn tối đa bao nhiêu thanh bánh?"
  if (
    (q.includes('một ngày') || q.includes('1 ngày') || q.includes('mỗi ngày')) &&
    (q.includes('bao nhiêu thanh') || q.includes('tối đa') || q.includes('mấy thanh') || q.includes('ăn mấy'))
  ) {
    return {
      text: `Lượng bánh khuyến nghị mỗi ngày tùy thuộc vào mục tiêu vận động của bạn:\n\n- **Với người làm văn phòng, Eat Clean hoặc đang Giảm cân:** Nên dùng **1 – 2 thanh/ngày** (tương đương **135 – 300 kcal**), chia vào bữa phụ giữa giờ sáng (9:30 – 10:00) hoặc bữa xế chiều (15:00 – 16:00).\n- **Với người Tập Gym, Chơi thể thao, Trekking hoặc Tăng cơ:** Có thể dùng tối đa **2 – 3 thanh/ngày** (khoảng **300 – 480 kcal**, cung cấp tới **20g – 30g Protein**), dùng vào bữa sáng nhanh, trước tập 30 phút và sau buổi tập.\n- **Với Bánh Ngói Hạnh Nhân (túi nhỏ 20g = 2 bánh = 98 kcal):** Nên dùng **1 – 2 túi nhỏ/ngày** cùng trà ấm.\n- **Với Biscotti (khẩu phần 50g = 2 miếng = 175 kcal):** Khuyến nghị dùng **2 – 3 miếng/ngày**.\n\n💡 Bạn có thể dùng công cụ **"Tính khẩu phần"** ngay trên thanh tab của hộp chat này để tính chính xác tổng Calo và % khuyến nghị WHO theo số lượng định ăn nhé!`,
      recommendedProduct: maccaOatProd,
      quickReplies: [
        'Một thanh bánh ngũ cốc SOWELL chứa bao nhiêu calo (kcal)?',
        'Tôi tập gym/tăng cơ có ăn bánh SOWELL được không? Lượng protein trong mỗi thanh là bao nhiêu?',
        'Bánh này có thay thế bữa ăn chính (sáng/trưa/tối) được không?'
      ],
      level: 1
    };
  }

  // Q1.7: "Chỉ số đường huyết (GI) của bánh là bao nhiêu, có gây tích mỡ không?"
  if (
    q.includes('chỉ số đường huyết') ||
    q.includes('chỉ số gi') ||
    q.includes('low gi') ||
    q.includes('tích mỡ') ||
    (q.includes('gi') && (q.includes('bao nhiêu') || q.includes('bánh')))
  ) {
    return {
      text: `Các dòng bánh thanh ngũ cốc SOWELL có **chỉ số đường huyết rất thấp: Low GI = 35** (thuộc nhóm thực phẩm GI thấp ≤ 55 theo chuẩn dinh dưỡng quốc tế) và **hoàn toàn không gây tích mỡ nội tạng**:\n\n1. **Vì sao bánh đạt chuẩn Low GI = 35?**\n   - Bánh sử dụng **mật hoa dừa tự nhiên Cần Giờ (GI = 35)** và **chiết xuất cỏ ngọt Stevia (GI = 0)** thay thế hoàn toàn cho đường cát tinh luyện (GI = 65–70) hay siro công nghiệp (GI > 80).\n   - Kết hợp 85% hạt nguyên bản (Macca, Hạnh nhân, Óc chó) và yến mạch Úc nguyên cám giàu **chất xơ hòa tan Beta-Glucan (4.2g – 6.0g xơ/thanh)**.\n2. **Cơ chế chống tích mỡ:**\n   - Khi ăn thực phẩm Low GI = 35, carbohydrate được tiêu hóa và giải phóng năng lượng **chậm rãi, đều đặn** trong suốt 3–4 giờ.\n   - Cơ thể **không bị vọt đường huyết (Sugar Spike)** và tuyến tụy không phải tiết ồ ạt hormone **Insulin** (hormone thúc đẩy tích mỡ bụng và mỡ nội tạng), giúp bạn giữ vóc dáng săn chắc và tỉnh táo làm việc.`,
      recommendedProduct: sesameRedbeanProd,
      quickReplies: [
        'Bánh có sử dụng đường tinh luyện không? Thương hiệu dùng chất tạo ngọt gì?',
        'Tôi bị tiểu đường / đường huyết cao thì có ăn được bánh này không?',
        'Tôi đang muốn giảm cân/giảm mỡ thì nên ăn loại bánh nào và ăn vào thời điểm nào?'
      ],
      level: 1
    };
  }

  // ==========================================================================
  // NHÓM 2: CHẾ ĐỘ ĂN & THÀNH PHẦN (ĂN KIÊNG, DỊ ỨNG) (8 CÂU HỎI)
  // ==========================================================================

  // Q2.1: "Tôi bị tiểu đường / đường huyết cao thì có ăn được bánh này không?"
  if (q.includes('tiểu đường') || q.includes('đái tháo') || q.includes('đường huyết cao') || q.includes('tiền tiểu đường')) {
    return {
      text: `Người bị **tiểu đường hoặc đường huyết cao hoàn toàn có thể sử dụng** các dòng bánh thanh chuyên biệt **Không Đường / Ít Đường (Low GI = 35)** của SOWELL để làm bữa phụ ổn định đường huyết:\n\n✅ **Top 3 dòng bánh an toàn nhất cho người tiểu đường:**\n1. **Bánh Thanh Protein Mè Đen & Đậu Đỏ (Khuyên dùng số 1):**\n   - **0g Đường (Added Sugar = 0g, Total Sugar = 0g)**.\n   - Tạo ngọt nhẹ từ **chiết xuất cỏ ngọt Stevia tự nhiên (GI = 0)**, không làm tăng đường huyết.\n   - Chứa **6.0g chất xơ** và **9.5g đạm thực vật** giúp làm chậm hấp thu tinh bột tối đa.\n2. **Bánh Thanh Socola Đen 85% & Hạnh Nhân:** Chỉ chứa **0.8g đường** tự nhiên, 0g đường tinh luyện, giàu chất xơ (5.1g) và chất béo tốt.\n3. **Bánh Thanh Bơ Đậu Phộng & Hạt Chia (1.0g đường)** & **Bánh Macca Yến Mạch Mật Dừa (1.2g đường từ mật hoa dừa Low GI = 35)**.\n\n⚠️ *Lưu ý:* Bạn nên tránh dòng *Biscotti* (10g đường/50g) và *Bánh Ngói* (5.2g đường/20g), mỗi lần ăn phụ chỉ nên dùng **1 thanh** kèm nước ấm hoặc trà không đường nhé!`,
      recommendedProduct: sesameRedbeanProd,
      quickReplies: [
        'Bánh có sử dụng đường tinh luyện không? Thương hiệu dùng chất tạo ngọt gì?',
        'Chỉ số đường huyết (GI) của bánh là bao nhiêu, có gây tích mỡ không?',
        'Tôi ăn kiêng theo chế độ Eat Clean / Keto / Das / Low-carb thì chọn loại nào?'
      ],
      level: 2
    };
  }

  // Q2.2: "Bánh có sử dụng đường tinh luyện không? Thương hiệu dùng chất tạo ngọt gì?"
  if (
    q.includes('đường tinh luyện') ||
    q.includes('chất tạo ngọt') ||
    q.includes('tạo ngọt bằng gì') ||
    q.includes('dùng đường gì') ||
    q.includes('mật hoa dừa') ||
    q.includes('stevia')
  ) {
    return {
      text: `SOWELL cam kết **0% Đường tinh luyện (đường trắng công nghiệp)** và **0% Siro bắp cao fructose (HFCS)** trong toàn bộ các dòng bánh thanh ngũ cốc và Granola!\n\n🌿 **Thương hiệu sử dụng 3 nguồn tạo ngọt tự nhiên lành mạnh:**\n1. **Mật hoa dừa hữu cơ Cần Giờ:** Được thu hoạch thủ công từ hoa dừa nước, có vị ngọt thanh dịu, giàu khoáng chất (Kali, Magie) và chỉ số đường huyết thấp (**Low GI = 35**).\n2. **Chiết xuất Cỏ ngọt Stevia tự nhiên:** Sử dụng trong các dòng bánh *Không Đường / Keto* (*Bánh Mè Đen Đậu Đỏ, Bánh Socola Đen 85%*), hoàn toàn **0 calo, GI = 0**, an toàn tuyệt đối cho người kiêng đường và tiểu đường.\n3. **Vị ngọt tự nhiên từ quả sấy lạnh:** Chuối sứ Bến Tre sấy dẻo, Táo đỏ Tân Cương, Kỷ tử hữu cơ Ninh Hạ và Nam việt quất Canada.\n\n*(Ghi chú minh bạch: Riêng 2 dòng bánh nướng kiểu Âu truyền thống là Biscotti và Bánh Ngói Hạnh Nhân có sử dụng một lượng nhỏ đường nâu hữu cơ và đường trehalose tự nhiên từ thực vật).*`,
      recommendedProduct: maccaOatProd,
      quickReplies: [
        'Chỉ số đường huyết (GI) của bánh là bao nhiêu, có gây tích mỡ không?',
        'Tôi bị tiểu đường / đường huyết cao thì có ăn được bánh này không?',
        'Bánh có chứa chất bảo quản, phụ gia hay màu thực phẩm nhân tạo không?'
      ],
      level: 1
    };
  }

  // Q2.3: "Tôi ăn kiêng theo chế độ Eat Clean / Keto / Das / Low-carb thì chọn loại nào?"
  if (
    q.includes('eat clean') ||
    q.includes('keto') ||
    q.includes('das') ||
    q.includes('low-carb') ||
    q.includes('low carb') ||
    q.includes('ít tinh bột')
  ) {
    return {
      text: `SOWELL thiết kế các dòng bánh chuyên biệt đáp ứng chuẩn xác từng chế độ ăn kiêng của bạn:\n\n🥑 **1. Chế độ Keto / DAS / Low-Carb (Cần Net-Carb thấp, 0g đường, giàu Fat tốt & Đạm):**\n- **Bánh Thanh Protein Mè Đen & Đậu Đỏ:** Tổng Carb 11.2g trừ 6.0g Chất xơ = **Chỉ 5.2g Net-Carb**, **0g đường**, 9.5g Protein, 5.8g chất béo tốt.\n- **Bánh Thanh Socola Đen 85% & Hạnh Nhân:** Tổng Carb 12.5g trừ 5.1g Chất xơ = **Chỉ 7.4g Net-Carb**, **0.8g đường**, 8.5g chất béo tốt từ hạnh nhân California & bơ cacao.\n- **Bánh Thanh Bơ Đậu Phộng & Hạt Chia:** **10.3g Net-Carb**, **1.0g đường**, 10.2g Protein, 9.5g chất béo tốt.\n\n🥗 **2. Chế độ Eat Clean (Nguyên liệu thô tự nhiên, nướng mộc 120°C):**\n- Toàn bộ sản phẩm SOWELL đều đạt chuẩn Eat Clean! Nổi bật nhất là:\n  - **Bánh Thanh Macca & Yến Mạch Mật Dừa (142 kcal)**\n  - **Bánh Thanh Hạt Bí Xanh & Táo Đỏ Kỷ Tử (135 kcal)**\n  - **Hũ Granola Siêu Hạt (85% hạt nguyên bản)**, **Biscotti nguyên cám** & **Bánh Ngói Hạnh Nhân**.`,
      recommendedProduct: chocoAlmondProd,
      quickReplies: [
        'Tôi có thể chọn combo mix sẵn theo mục tiêu (VD: Combo Giảm Cân, Combo Tăng Cơ) không?',
        'Một thanh bánh ngũ cốc SOWELL chứa bao nhiêu calo (kcal)?',
        'Sản phẩm có dùng cho người ăn chay (Vegan / Ăn chay trường) được không?'
      ],
      level: 1
    };
  }

  // Q2.4: "Sản phẩm có dùng cho người ăn chay (Vegan / Ăn chay trường) được không?"
  if (q.includes('ăn chay') || q.includes('thuần chay') || q.includes('vegan') || q.includes('chay trường')) {
    return {
      text: `**Hoàn toàn dùng được ạ!** SOWELL phân loại rất minh bạch theo từng hình thức ăn chay:\n\n🌱 **1. Dành cho người Ăn Chay Trường / Thuần Chay (100% Vegan – Không trứng, không bơ sữa động vật, không mật ong):**\nBạn yên tâm sử dụng **6 sản phẩm 100% thực vật** sau:\n- **Bánh Thanh Macca & Yến Mạch Mật Dừa** *(142 kcal – kết dính bằng mật hoa dừa tự nhiên)*\n- **Bánh Thanh Protein Mè Đen & Đậu Đỏ Nảy Mầm** *(148 kcal – 9.5g đạm thực vật)*\n- **Bánh Thanh Hạt Bí Xanh & Táo Đỏ Kỷ Tử** *(135 kcal – thảo mộc dưỡng nhan)*\n- **Bánh Granola Quả Óc Chó & Chuối Sấy Dẻo** *(165 kcal – ngọt tự nhiên từ chuối chín)*\n- **Bánh Thanh Hạt Điều & Nam Việt Quất Uji Matcha** *(138 kcal)*\n- **Hũ Granola Siêu Hạt Nướng Mộc Mật Hoa Dừa 350g** *(182 kcal/40g)*\n\n🥚 **2. Dành cho người Ăn Chay Có Trứng & Sữa (Lacto-Ovo Vegetarian):**\nNgoài 6 món thuần chay trên, bạn có thể dùng thêm **Biscotti (3 vị)** và **Bánh Ngói Hạnh Nhân** (2 loại này có thành phần trứng gà và bơ lạt).`,
      recommendedProduct: maccaOatProd,
      quickReplies: [
        'Tôi có thể chọn combo mix sẵn theo mục tiêu (VD: Combo Giảm Cân, Combo Tăng Cơ) không?',
        'Tôi bị dị ứng đậu phộng / hạt điều / hải sản / gluten, sản phẩm nào an toàn cho tôi?',
        'Bánh có chứa chất bảo quản, phụ gia hay màu thực phẩm nhân tạo không?'
      ],
      level: 1
    };
  }

  // Q2.5: "Tôi bị dị ứng đậu phộng / hạt điều / hải sản / gluten, sản phẩm nào an toàn cho tôi?"
  if (
    q.includes('dị ứng') ||
    q.includes('hải sản') ||
    q.includes('đậu phộng') ||
    q.includes('hạt điều') ||
    q.includes('hạnh nhân') ||
    q.includes('óc chó') ||
    q.includes('gluten') ||
    q.includes('nut-free')
  ) {
    return {
      text: `SOWELL công khai minh bạch bảng thành phần và gợi ý sản phẩm **an toàn tuyệt đối** theo từng nhóm dị ứng của bạn:\n\n1. **Dị ứng Hải sản:** **100% sản phẩm của SOWELL hoàn toàn KHÔNG chứa hải sản** hay bất kỳ thành phần động vật biển nào. Bạn ăn được tất cả các vị!\n2. **Dị ứng Đậu phộng (Lạc):** Chỉ cần tránh *Bánh Bơ Đậu Phộng & Hạt Chia*. Bạn dùng an toàn: **Bánh Mè Đen Đậu Đỏ (Nut-Free)**, **Bánh Hạt Bí Táo Đỏ (Nut-Free)**, **Bánh Macca Yến Mạch**, **Bánh Socola Hạnh Nhân**, **Biscotti**, **Bánh Ngói**.\n3. **Dị ứng Hạt điều / Hạnh nhân / Óc chó (Hoặc tất cả hạt vỏ cứng):**\n   - Hãy chọn dòng **100% Nut-Free (Không hạt vỏ cứng)** được chế biến trên dây chuyền riêng biệt:\n     - **Bánh Thanh Protein Mè Đen & Đậu Đỏ Nảy Mầm** *(Chỉ chứa mè đen & đậu đỏ, 9.5g đạm, 0g đường)*.\n     - **Bánh Thanh Hạt Bí Xanh & Táo Đỏ Kỷ Tử** *(Chỉ dùng hạt bí xanh, táo đỏ, kỷ tử, 135 kcal)*.\n   - *(Nếu chỉ dị ứng riêng hạt điều, bạn vẫn ăn được Bánh Ngói Hạnh Nhân và Bánh Macca Yến Mạch)*.\n4. **Dị ứng Gluten (Bột mì):** Tránh *Biscotti* và *Bánh Ngói* (có bột mì). Lựa chọn an toàn nhất là **Bánh Thanh Protein Mè Đen & Đậu Đỏ Nảy Mầm** (làm từ gạo lứt huyết rồng, bột đậu đỏ và mè đen, không dùng bột mì).\n\n💡 Bạn có thể dùng bộ lọc **"Loại trừ dị ứng"** ngay tại Cửa hàng hoặc trong mục **Combo Mix Vị** để hệ thống tự động gạch bỏ các vị chứa chất gây dị ứng!`,
      recommendedProduct: sesameRedbeanProd,
      quickReplies: [
        'Làm sao để hệ thống tự lọc ra combo bánh dành riêng cho người không ăn được hạt điều?',
        'Sản phẩm có dùng cho người ăn chay (Vegan / Ăn chay trường) được không?',
        'Bánh có chứa chất bảo quản, phụ gia hay màu thực phẩm nhân tạo không?'
      ],
      level: 2
    };
  }

  // Q2.6: "Mẹ bầu, phụ nữ mang thai hoặc đang cho con bú có dùng được không?"
  if (q.includes('mẹ bầu') || q.includes('mang thai') || q.includes('cho con bú') || q.includes('bà bầu') || q.includes('sau sinh') || q.includes('thai kỳ')) {
    return {
      text: `**Mẹ bầu và phụ nữ đang cho con bú hoàn toàn yên tâm sử dụng bánh SOWELL!** Bánh được nướng mộc tự nhiên, **0% chất bảo quản, 0% đường tinh luyện** (giúp kiểm soát cân nặng và hạn chế nguy cơ tiểu đường thai kỳ).\n\n🤰 **Top 3 dòng bánh thiết kế chuyên biệt cho Mẹ bầu & Sau sinh:**\n1. **Bánh Granola Nướng Mộc Quả Óc Chó & Chuối Sấy Dẻo (165 kcal):**\n   - Chứa 32% hạt óc chó vàng Chile dồi dào **Omega-3 (ALA/DHA)**, Axit Folic và Kẽm hỗ trợ phát triển trí não cho bé ngay từ trong bụng mẹ.\n2. **Bánh Thanh Hạt Bí Xanh & Táo Đỏ Kỷ Tử Dưỡng Nhan (135 kcal):**\n   - Kết hợp táo đỏ Tân Cương, kỷ tử Ninh Hạ và hạt bí xanh giúp bổ sung **20% Sắt (Iron)**, dưỡng huyết, lợi sữa và giảm cảm giác nhạt miệng khi ốm nghén.\n3. **Bánh Thanh Protein Mè Đen & Đậu Đỏ Nảy Mầm (148 kcal):**\n   - Cung cấp tới **25% Canxi** và **22% Sắt thực vật** mỗi thanh, **0g đường**, rất tốt cho mẹ bầu bị tiểu đường thai kỳ cần bữa phụ no lâu.`,
      recommendedProduct: walnutBananaProd,
      quickReplies: [
        'Tôi có thể chọn combo mix sẵn theo mục tiêu (VD: Combo Giảm Cân, Combo Tăng Cơ) không?',
        'Trẻ em mấy tuổi thì bắt đầu ăn được bánh ngũ cốc SOWELL?',
        'Bánh có chứa chất bảo quản, phụ gia hay màu thực phẩm nhân tạo không?'
      ],
      level: 2
    };
  }

  // Q2.7: "Trẻ em mấy tuổi thì bắt đầu ăn được bánh ngũ cốc SOWELL?"
  if (q.includes('trẻ em') || q.includes('mấy tuổi') || q.includes('bé mấy tuổi') || q.includes('trẻ nhỏ') || q.includes('cho bé ăn')) {
    return {
      text: `Về độ tuổi phù hợp cho trẻ em sử dụng bánh ngũ cốc SOWELL:\n\n- **Trẻ từ 3 tuổi trở lên:** Bé đã mọc đủ răng hàm và hoàn thiện phản xạ nhai nuốt các loại hạt giòn nên **hoàn toàn có thể ăn trực tiếp** các dòng bánh SOWELL để bổ sung Canxi, Sắt, Đạm thực vật và Omega-3 thay cho snack chiên dầu hay kẹo ngọt công nghiệp.\n- **Các vị bánh các bé yêu thích nhất:**\n  1. **Bánh Granola Quả Óc Chó & Chuối Sấy Dẻo:** Ngọt thơm tự nhiên từ chuối chín, giàu Omega-3 tốt cho trí não và thị lực của trẻ.\n  2. **Bánh Ngói Hạnh Nhân (Tuiles Almond):** Lát bánh mỏng giòn rụm, thơm bơ lạt dịu nhẹ (98 kcal/túi 2 bánh).\n  3. **Bánh Thanh Mè Đen & Đậu Đỏ:** Giàu Canxi (25% DV) hỗ trợ phát triển chiều cao.\n- **Lưu ý với trẻ dưới 3 tuổi:** Không nên cho bé cầm ăn nguyên miếng hạt cứng để tránh nguy cơ hóc. Phụ huynh có thể bẻ nhỏ hoặc nghiền vụn bánh ngâm mềm cùng sữa ấm / sữa chua cho bé dùng dưới sự quan sát của người lớn nhé!`,
      recommendedProduct: walnutBananaProd,
      quickReplies: [
        'Mẹ bầu, phụ nữ mang thai hoặc đang cho con bú có dùng được không?',
        'Bánh có chứa chất bảo quản, phụ gia hay màu thực phẩm nhân tạo không?',
        'Một thanh bánh ngũ cốc SOWELL chứa bao nhiêu calo (kcal)?'
      ],
      level: 2
    };
  }

  // Q2.8: "Bánh có chứa chất bảo quản, phụ gia hay màu thực phẩm nhân tạo không?"
  if (
    q.includes('chất bảo quản') ||
    q.includes('phụ gia') ||
    q.includes('màu thực phẩm') ||
    q.includes('nhân tạo') ||
    q.includes('hóa chất') ||
    q.includes('phẩm màu')
  ) {
    return {
      text: `SOWELL cam kết tiêu chuẩn **3 KHÔNG tuyệt đối**:\n- **KHÔNG chất bảo quản hóa học (No Preservatives)**\n- **KHÔNG màu thực phẩm nhân tạo (No Artificial Colors)**\n- **KHÔNG hương liệu tổng hợp & chất điều vị (No Artificial Flavors)**\n\n🌱 **Bí quyết tạo màu sắc, hương vị và giữ giòn tự nhiên của SOWELL:**\n1. **Màu sắc & Hương thơm 100% nguyên bản:** Màu xanh từ *Bột trà xanh Uji Matcha Nhật Bản*, màu nâu đắng dịu từ *Cacao lên men Tiền Giang*, màu đen từ *Mè đen Điện Biên*, hương thơm từ *Bột quế Ceylon & Tinh chất Vani Madagascar*.\n2. **Công nghệ giữ giòn không cần chất bảo quản:** Bánh được sấy nướng chậm ở nhiệt độ thấp **120°C** giúp rút kiệt độ ẩm dư thừa trong hạt mà vẫn bảo toàn enzyme, sau đó đóng gói ngay trong **túi màng nhôm đa lớp kín khí** đạt chứng nhận quốc tế **ISO 22000:2018, HACCP Codex và OCOP 4 Sao**.`,
      recommendedProduct: matchaCashewProd,
      quickReplies: [
        'Bánh ngũ cốc SOWELL hạn sử dụng được bao lâu kể từ ngày sản xuất?',
        'Cách bảo quản bánh như thế nào? Có cần bỏ vào tủ lạnh không?',
        'Bánh có sử dụng đường tinh luyện không? Thương hiệu dùng chất tạo ngọt gì?'
      ],
      level: 1
    };
  }

  // ==========================================================================
  // NHÓM 4: BẢO QUẢN & HẠN SỬ DỤNG (4 CÂU HỎI)
  // ==========================================================================

  // Q4.1: "Bánh ngũ cốc SOWELL hạn sử dụng được bao lâu kể từ ngày sản xuất?"
  if (
    q.includes('hạn sử dụng') ||
    q.includes('hsd') ||
    (q.includes('bao lâu') && (q.includes('sản xuất') || q.includes('hạn') || q.includes('để được')))
  ) {
    return {
      text: `Hạn sử dụng (HSD) của các dòng bánh SOWELL khi chưa mở bao bì như sau:\n\n- **Các dòng Bánh Thanh Ngũ Cốc (7 vị) & Hũ Granola Siêu Hạt 350g:** Hạn sử dụng **06 tháng** kể từ ngày sản xuất (nhờ công nghệ sấy nhiệt chậm 120°C và đóng túi màng nhôm đa lớp kín khí riêng từng thanh).\n- **Dòng Biscotti (3 vị) & Bánh Ngói Hạnh Nhân (Tuiles Almond):** Hạn sử dụng **03 tháng** kể từ ngày sản xuất in dập rõ ràng trên bao bì.\n\n🔥 **Cam kết bánh mới:** Xưởng SOWELL nướng mộc mẻ mới mỗi ngày / hàng tuần, cam kết khách hàng luôn nhận được những mẻ bánh mới xuất xưởng thơm giòn nhất!`,
      recommendedProduct: biscottiProd,
      quickReplies: [
        'Cách bảo quản bánh như thế nào? Có cần bỏ vào tủ lạnh không?',
        'Nếu tôi xé bao bì ra nhưng chưa ăn hết thì bảo quản ra sao?',
        'Bánh bị mềm hoặc gãy trong quá trình vận chuyển thì xử lý thế nào?'
      ],
      level: 1
    };
  }

  // Q4.2: "Cách bảo quản bánh như thế nào? Có cần bỏ vào tủ lạnh không?"
  if (
    q.includes('tủ lạnh') ||
    (q.includes('cách bảo quản') && !q.includes('xé bao bì') && !q.includes('chưa ăn hết'))
  ) {
    return {
      text: `Hướng dẫn bảo quản bánh ngũ cốc SOWELL giữ trọn độ giòn bùi:\n\n1. **Cách bảo quản tiêu chuẩn:**\n   - Để bánh ở **nơi khô ráo, thoáng mát (nhiệt độ phòng từ 20°C – 28°C)**.\n   - Tránh ánh nắng mặt trời chiếu trực tiếp, tránh để gần bếp nấu ăn hoặc nơi có độ ẩm cao.\n2. **Có cần bỏ vào tủ lạnh không?**\n   - **Không bắt buộc!** Vì bánh đã được nướng sấy khô và đóng túi kín nên ở nhiệt độ phòng bánh vẫn giữ nguyên độ giòn ngon.\n   - **Mẹo thưởng thức ngon hơn:** Vào mùa hè nắng nóng hoặc với dòng **Bánh Thanh Socola Đen 85% & Hạnh Nhân**, bạn có thể đặt bánh vào **ngăn mát tủ lạnh khoảng 15 – 30 phút trước khi ăn** sẽ giúp kết cấu bánh đanh giòn, mát lạnh và dậy vị bùi béo hơn rất nhiều!`,
      recommendedProduct: chocoAlmondProd,
      quickReplies: [
        'Nếu tôi xé bao bì ra nhưng chưa ăn hết thì bảo quản ra sao?',
        'Bánh ngũ cốc SOWELL hạn sử dụng được bao lâu kể từ ngày sản xuất?',
        'Bánh bị mềm hoặc gãy trong quá trình vận chuyển thì xử lý thế nào?'
      ],
      level: 1
    };
  }

  // Q4.3: "Nếu tôi xé bao bì ra nhưng chưa ăn hết thì bảo quản ra sao?"
  if (
    q.includes('xé bao bì') ||
    q.includes('chưa ăn hết') ||
    q.includes('ăn không hết') ||
    q.includes('mở túi') ||
    q.includes('mở bao bì') ||
    q.includes('ăn dở')
  ) {
    return {
      text: `Nếu bạn đã xé bao bì nhưng chưa dùng hết ngay, bạn hãy bảo quản theo từng loại quy cách sau để bánh không bị ỉu gió:\n\n1. **Đối với Bánh Thanh Ngũ Cốc (35g–40g) & Bánh Ngói Hạnh Nhân (túi nhỏ 20g):**\n   - Mỗi thanh bánh đều có túi màng nhôm riêng từng khẩu phần. Nếu bạn chỉ ăn nửa thanh, hãy **gập kín chặt mép túi nhôm 2–3 nếp** (dùng kẹp miệng túi hoặc cất vào hộp kín/ngăn mát tủ lạnh) và dùng hết trong vòng **2 – 3 ngày**.\n2. **Đối với túi Biscotti (100g/250g):**\n   - Sau khi lấy bánh, hãy **ép hết không khí ra ngoài và vuốt chặt đường khóa Zip** trên miệng túi (hoặc trữ trong hũ kín có gói hút ẩm đi kèm). Bánh giữ giòn tốt nhất trong **5 – 7 ngày** sau khi mở.\n3. **Đối với Hũ Thủy Tinh Granola Siêu Hạt (350g):**\n   - Dùng muỗng khô sạch để múc hạt và **vặn chặt nắp thiếc ngay sau khi dùng**. Có thể bảo quản ở nơi thoáng mát hoặc ngăn mát tủ lạnh và dùng dần trong **2 – 3 tuần**.`,
      recommendedProduct: granolaJarProd,
      quickReplies: [
        'Bánh bị mềm hoặc gãy trong quá trình vận chuyển thì xử lý thế nào?',
        'Cách bảo quản bánh như thế nào? Có cần bỏ vào tủ lạnh không?',
        'Bánh ngũ cốc SOWELL hạn sử dụng được bao lâu kể từ ngày sản xuất?'
      ],
      level: 1
    };
  }

  // Q4.4: "Bánh bị mềm hoặc gãy trong quá trình vận chuyển thì xử lý thế nào?"
  if (
    q.includes('bị mềm') ||
    q.includes('bị ỉu') ||
    q.includes('giòn lại') ||
    ((q.includes('gãy') || q.includes('vỡ') || q.includes('bể')) && q.includes('vận chuyển'))
  ) {
    return {
      text: `SOWELL hướng dẫn bạn cách xử lý nhanh và chính sách bảo vệ quyền lợi khách hàng 100%:\n\n🔥 **1. Nếu bánh bị mềm / ỉu gió (do mở túi lâu ngoài không khí ẩm):**\n- Bạn chỉ cần cho bánh vào **nồi chiên không dầu hoặc lò nướng ở mức nhiệt 100°C – 120°C trong 3 – 5 phút**.\n- Sau đó lấy bánh ra đĩa **để nguội tự nhiên 5 phút**, hơi ẩm sẽ bay hơi hết và bánh sẽ **giòn rụm, thơm lừng trở lại như vừa mới ra lò**!\n\n📦 **2. Nếu bánh bị gãy nát / bể vỡ nhiều trong quá trình vận chuyển:**\n- Mọi kiện hàng SOWELL đều được bọc xốp chống sốc đa lớp. Tuy nhiên nếu đơn vị vận chuyển làm va đập mạnh khiến bánh bị gãy vụn nhiều, vỡ hũ hoặc rách bao bì:\n- Bạn chỉ cần **chụp ảnh hoặc quay video kiện hàng** và nhắn ngay cho SOWELL (Hotline **1900 6828**). SOWELL cam kết **Đổi mới 1-1 hoặc gửi bù sản phẩm mới hoàn toàn miễn phí trong vòng 48 giờ**!`,
      recommendedProduct: tuilesProd,
      quickReplies: [
        'Chính sách đổi trả hàng bị lỗi hoặc giao sai vị như thế nào?',
        'Tôi có thể kiểm tra hàng (đồng kiểm) trước khi thanh toán cho shipper không?',
        'Phí ship tính như thế nào? Đơn hàng bao nhiêu thì được Freeship?'
      ],
      level: 1
    };
  }

  // ==========================================================================
  // NHÓM 5: ĐẶT HÀNG, GIAO HÀNG & THANH TOÁN (6 CÂU HỎI)
  // ==========================================================================

  // Q5.1: "Phí ship tính như thế nào? Đơn hàng bao nhiêu thì được Freeship?"
  if (q.includes('phí ship') || q.includes('freeship') || q.includes('miễn phí vận chuyển') || q.includes('tiền ship')) {
    return {
      text: `Chính sách phí vận chuyển (Ship) và Freeship tại website SOWELL cực kỳ ưu đãi:\n\n- **Phí vận chuyển tiêu chuẩn:** Đồng giá chỉ **25.000₫** cho các đơn hàng dưới 299.000₫ trên toàn quốc.\n- **Miễn phí vận chuyển 100% (FREESHIP):**\n  1. **Tự động FREESHIP toàn quốc** cho mọi đơn hàng có giá trị từ **299.000₫ trở lên** (Thanh tiến độ Freeship được hiển thị trực tiếp ngay trong Giỏ hàng của bạn).\n  2. **Tự động FREESHIP** khi bạn đặt **Combo Hộp Gia Đình (18 Hộp - Giảm 25%)**.\n  3. **Tặng mã Voucher:** Bạn có thể chọn mã **FREESHIP (-25K)** có sẵn ngay trong Giỏ hàng để được miễn phí vận chuyển ngay cả với đơn nhỏ!`,
      recommendedProduct: maccaOatProd,
      quickReplies: [
        'Tôi ở [Tên Tỉnh/Thành phố] thì đặt hàng sau bao lâu nhận được?',
        'Website hỗ trợ những hình thức thanh toán nào (MoMo, VNPay, COD, Chuyển khoản)?',
        'Tôi có thể kiểm tra hàng (đồng kiểm) trước khi thanh toán cho shipper không?'
      ],
      level: 1
    };
  }

  // Q5.2: "Tôi ở [Tên Tỉnh/Thành phố] thì đặt hàng sau bao lâu nhận được?"
  if (
    q.includes('bao lâu nhận được') ||
    q.includes('mấy ngày nhận được') ||
    q.includes('thời gian giao hàng') ||
    q.includes('giao hàng mất bao lâu') ||
    (q.includes('tôi ở') && (q.includes('đặt hàng') || q.includes('nhận được') || q.includes('bao lâu')))
  ) {
    return {
      text: `Thời gian giao hàng của SOWELL đến các Tỉnh/Thành phố trên toàn quốc như sau:\n\n- **Khu vực Nội thành TP. Hồ Chí Minh & Hà Nội:**\n  - **Giao Hỏa Tốc 2H:** Nhận bánh ngay trong vòng **2 giờ** kể từ khi xác nhận đơn.\n  - **Giao Tiêu Chuẩn:** Nhận hàng trong **1 – 2 ngày làm việc**.\n- **Khu vực Đà Nẵng, Cần Thơ, Hải Phòng, Bình Dương, Đồng Nai, Long An:** Nhận hàng sau **2 – 3 ngày làm việc**.\n- **Các Tỉnh / Thành phố khác trên toàn quốc:** Nhận hàng sau **2 – 4 ngày làm việc** thông qua đối tác vận chuyển **Giao Hàng Nhanh (GHN Express)**.\n\n📍 Bạn có thể bấm vào mục **"Tra cứu đơn hàng"** trên góc phải đầu trang web bất kỳ lúc nào để xem trực tiếp lộ trình bưu tá đang giao bánh đến bạn!`,
      recommendedProduct: biscottiProd,
      quickReplies: [
        'Phí ship tính như thế nào? Đơn hàng bao nhiêu thì được Freeship?',
        'Tôi có thể kiểm tra hàng (đồng kiểm) trước khi thanh toán cho shipper không?',
        'Website hỗ trợ những hình thức thanh toán nào (MoMo, VNPay, COD, Chuyển khoản)?'
      ],
      level: 1
    };
  }

  // Q5.3: "Website hỗ trợ những hình thức thanh toán nào (MoMo, VNPay, COD, Chuyển khoản)?"
  if (
    q.includes('hình thức thanh toán') ||
    q.includes('phương thức thanh toán') ||
    q.includes('momo') ||
    q.includes('vnpay') ||
    q.includes('vietqr') ||
    q.includes('chuyển khoản') ||
    q.includes('cod')
  ) {
    return {
      text: `Website SOWELL hỗ trợ đầy đủ **4 phương thức thanh toán đa kênh** an toàn, tiện lợi (bảo mật mã hóa SSL 256-bit):\n\n1. **Ví điện tử MoMo (Khuyên dùng):** Quét mã QR thanh toán siêu tốc chỉ trong 3 giây qua ứng dụng MoMo.\n2. **Cổng thanh toán VNPay QR:** Hỗ trợ quét mã QR thanh toán trực tiếp trên hơn **40 ứng dụng Ngân hàng (Mobile Banking)** và ví điện tử tại Việt Nam.\n3. **Chuyển khoản Ngân hàng (Tự động tạo mã VietQR):**\n   - Ngân hàng **Vietcombank** – STK: **1028 9988 8888** – Chủ TK: **CONG TY TNHH SOWELL HEALTH FOOD**.\n   - Hệ thống tự động tạo mã **VietQR** điền sẵn chính xác số tiền và cú pháp chuyển khoản của đơn hàng.\n4. **Thanh toán tiền mặt khi nhận hàng (COD):** Bạn nhận bánh tận tay, kiểm tra kiện hàng nguyên vẹn rồi mới thanh toán tiền mặt cho shipper.`,
      recommendedProduct: maccaOatProd,
      quickReplies: [
        'Tôi có thể kiểm tra hàng (đồng kiểm) trước khi thanh toán cho shipper không?',
        'SOWELL có xuất hóa đơn VAT cho doanh nghiệp khi mua làm quà tặng không?',
        'Phí ship tính như thế nào? Đơn hàng bao nhiêu thì được Freeship?'
      ],
      level: 1
    };
  }

  // Q5.4: "Tôi có thể kiểm tra hàng (đồng kiểm) trước khi thanh toán cho shipper không?"
  if (
    q.includes('kiểm tra hàng') ||
    q.includes('đồng kiểm') ||
    q.includes('trước khi thanh toán') ||
    q.includes('xem hàng trước')
  ) {
    return {
      text: `**Dạ hoàn toàn ĐƯỢC ạ!** SOWELL áp dụng chính sách **Cho phép kiểm tra hàng (Đồng kiểm) 100%** trước khi thanh toán cho mọi đơn hàng trên toàn quốc:\n\n- Khi shipper giao kiện hàng đến, bạn có toàn quyền **mở hộp carton bên ngoài để kiểm tra**:\n  1. Đúng loại bánh, đúng hương vị và đủ số lượng đã đặt (hoặc đúng các vị trong hộp Combo Mix Vị).\n  2. Bao bì túi màng nhôm / túi Zip / hũ thủy tinh nguyên vẹn, không bị móp vỡ hay rách hở.\n  3. Ngày sản xuất và hạn sử dụng in dập rõ ràng, mới tinh.\n- Sau khi kiểm tra hài lòng, bạn mới tiến hành thanh toán cho shipper.\n- *(Lưu ý nhỏ: Để đảm bảo vệ sinh an toàn thực phẩm, bạn vui lòng kiểm tra ngoại quan bao bì và không bóc xé lớp màng nhôm niêm phong trực tiếp của từng thanh bánh khi đồng kiểm nhé).*`,
      recommendedProduct: biscottiProd,
      quickReplies: [
        'Chính sách đổi trả hàng bị lỗi hoặc giao sai vị như thế nào?',
        'Website hỗ trợ những hình thức thanh toán nào (MoMo, VNPay, COD, Chuyển khoản)?',
        'Phí ship tính như thế nào? Đơn hàng bao nhiêu thì được Freeship?'
      ],
      level: 1
    };
  }

  // Q5.5: "Chính sách đổi trả hàng bị lỗi hoặc giao sai vị như thế nào?"
  if (
    q.includes('đổi trả') ||
    q.includes('giao sai') ||
    q.includes('hàng bị lỗi') ||
    q.includes('thiếu hàng') ||
    q.includes('hoàn tiền')
  ) {
    return {
      text: `SOWELL cam kết bảo vệ quyền lợi khách hàng với **Chính sách Đổi trả 1-1 Miễn Phí trong vòng 07 ngày** kể từ ngày nhận hàng:\n\n✅ **Các trường hợp được đổi mới 100% miễn phí:**\n1. Giao sai vị bánh, sai quy cách hộp Combo hoặc thiếu số lượng so với đơn đặt hàng.\n2. Sản phẩm bị bể vỡ vụn nhiều, vỡ hũ thủy tinh hoặc rách hở bao bì màng nhôm do quá trình vận chuyển.\n3. Bánh có bất kỳ dấu hiệu ỉu mềm hoặc lỗi chất lượng từ nhà sản xuất.\n\n⚡ **Quy trình xử lý siêu tốc trong 24h – 48h:**\n- Bạn chỉ cần chụp ảnh/quay video tình trạng sản phẩm và liên hệ **Hotline 1900 6828** (hoặc gửi tin nhắn tại đây).\n- SOWELL sẽ lập tức gửi đơn hàng mới đổi tận nhà cho bạn và **chịu 100% chi phí vận chuyển 2 chiều** (hoặc hoàn tiền 100% nếu bạn yêu cầu).`,
      recommendedProduct: maccaOatProd,
      quickReplies: [
        'Tôi có thể kiểm tra hàng (đồng kiểm) trước khi thanh toán cho shipper không?',
        'Bánh bị mềm hoặc gãy trong quá trình vận chuyển thì xử lý thế nào?',
        'SOWELL có xuất hóa đơn VAT cho doanh nghiệp khi mua làm quà tặng không?'
      ],
      level: 1
    };
  }

  // Q5.6: "SOWELL có xuất hóa đơn VAT cho doanh nghiệp khi mua làm quà tặng không?"
  if (
    q.includes('vat') ||
    q.includes('hóa đơn') ||
    q.includes('doanh nghiệp') ||
    q.includes('công ty') ||
    q.includes('quà tặng doanh nghiệp') ||
    q.includes('xuất hóa đơn')
  ) {
    return {
      text: `**Dạ CÓ đầy đủ ạ!** **Công ty TNHH Thực Phẩm SOWELL (GPKD/MST: 031899214)** hỗ trợ **xuất hóa đơn điện tử GTGT (VAT) hợp lệ 100%** cho mọi đơn hàng doanh nghiệp, công ty và tổ chức mua làm quà tặng hoặc phúc lợi nhân viên:\n\n1. **Cách yêu cầu xuất hóa đơn VAT nhanh nhất:**\n   - Tại bước **Thanh toán đơn hàng** trên website, bạn vui lòng điền **Email nhận hóa đơn điện tử** và ghi rõ thông tin xuất hóa đơn (*Tên công ty, Mã số thuế, Địa chỉ đăng ký kinh doanh*) vào ô **Ghi chú giao hàng**.\n   - Hóa đơn điện tử VAT sẽ được kế toán SOWELL gửi trực tiếp về Email của bạn ngay sau khi đơn hàng được xác nhận thanh toán.\n2. **Ưu đãi Quà tặng Doanh nghiệp số lượng lớn:**\n   - Hỗ trợ in logo doanh nghiệp lên thiệp quà tặng / đai hộp Combo, chiết khấu thương mại hấp dẫn (lên đến 25% – 30%) và giao hàng đa điểm. Bạn có thể liên hệ trực tiếp **Hotline: 1900 6828** hoặc **Email: contact@sowell.vn** nhé!`,
      recommendedProduct: granolaJarProd,
      quickReplies: [
        'Mua theo Combo 6 thanh hoặc 12 thanh thì được giảm giá bao nhiêu %?',
        'Website hỗ trợ những hình thức thanh toán nào (MoMo, VNPay, COD, Chuyển khoản)?',
        'Phí ship tính như thế nào? Đơn hàng bao nhiêu thì được Freeship?'
      ],
      level: 1
    };
  }

  // ==========================================================================
  // CÁC CÂU HỎI TRA CỨU NHANH VỀ BẢNG DINH DƯỠNG SẢN PHẨM CỤ THỂ TRÊN WEB
  // ==========================================================================
  if (q.includes('biscotti') || q.includes('bánh ngói') || q.includes('granola')) {
    if (q.includes('bánh ngói')) {
      return {
        text: `Thông tin chi tiết **Bánh Ngói Hạnh Nhân (Tuiles Almond)** trên website SOWELL:\n- **Giá bán:** 115.000₫ / gói 250g (gồm 12–13 túi nhỏ tiện lợi, mỗi túi 2 bánh).\n- **Dinh dưỡng 1 khẩu phần (1 túi 20g = 2 bánh):** **98 kcal**, 1.8g Đạm, 8.8g Carbs, 0.8g Chất xơ, 5.2g Đường, 6.2g Chất béo.\n- **Đặc điểm:** Lát bánh mỏng giòn rụm, thơm bơ lạt và bùi béo hạnh nhân lát cao cấp.`,
        recommendedProduct: tuilesProd,
        quickReplies: [
          'Một thanh bánh ngũ cốc SOWELL chứa bao nhiêu calo (kcal)?',
          'Bánh ngũ cốc SOWELL hạn sử dụng được bao lâu kể từ ngày sản xuất?'
        ],
        level: 1
      };
    }
    if (q.includes('granola')) {
      return {
        text: `Thông tin chi tiết **Hũ Granola Siêu Hạt Nướng Mộc Mật Hoa Dừa (350g)**:\n- **Giá bán:** 165.000₫ / hũ thủy tinh 350g.\n- **Tỷ lệ vàng:** **85% Hạt dinh dưỡng cao cấp** (Macca, Hạnh nhân Mỹ, Hạt điều Bình Phước, Óc chó vàng, Hạt bí xanh) và chỉ 15% yến mạch màng mỏng.\n- **Dinh dưỡng 1 khẩu phần (40g ~ 3 thìa canh):** **182 kcal**, **8.8g Đạm**, **5.5g Chất xơ**, chỉ **1.5g Đường** tự nhiên từ mật hoa dừa (0g đường tinh luyện).`,
        recommendedProduct: granolaJarProd,
        quickReplies: [
          'Một thanh bánh ngũ cốc SOWELL chứa bao nhiêu calo (kcal)?',
          'Sản phẩm có dùng cho người ăn chay (Vegan / Ăn chay trường) được không?'
        ],
        level: 1
      };
    }
    return {
      text: `Thông tin chi tiết **Biscotti (3 vị: Original, Choco, Matcha)** trên website SOWELL:\n- **Giá bán:** 85.000₫ / gói.\n- **Dinh dưỡng 1 khẩu phần (50g ~ 2 miếng):** **175 kcal**, **7.0g Đạm**, 28g Carbs, **3.0g Chất xơ**, 10g Đường, 4g Chất béo.\n- **Đặc điểm:** Nướng hai lần giòn chắc từ bột mì nguyên cám, hạnh nhân, hạt điều, hạt bí xanh và nho khô, rất hợp nhúng cà phê, sữa hoặc trà ấm.`,
      recommendedProduct: biscottiProd,
      quickReplies: [
        'Một thanh bánh ngũ cốc SOWELL chứa bao nhiêu calo (kcal)?',
        'Tôi muốn tự chọn các vị bánh khác nhau vào chung một hộp combo có được không?'
      ],
      level: 1
    };
  }

  // ==========================================================================
  // NGOÀI CÁC NỘI DUNG TRÊN -> AI THÔNG BÁO & CHUYỂN NHÂN VIÊN TƯ VẤN
  // ==========================================================================
  return {
    text: `🔔 **Thông báo từ Trợ lý AI:** Để giải đáp chính xác và chi tiết nhất cho câu hỏi của bạn (*"${question}"*), mình xin phép **chuyển cuộc trò chuyện này sang cho Nhân viên tư vấn của SOWELL** để trực tiếp hỗ trợ bạn ngay bây giờ nhé!`,
    level: 'human_handoff',
    needsHumanHandoff: true,
    handoffReason: 'Cần nhân viên tư vấn giải đáp chi tiết theo nhu cầu riêng của khách hàng'
  };
}
