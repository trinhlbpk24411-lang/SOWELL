import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  processUserQuestion,
  processHumanConsultantReply,
  calculateServings,
  ServingCalculationResult,
  TRAINED_FAQ_GROUPS
} from '../../data/aiNutritionEngine';
import { 
  Calculator, 
  X, 
  Send, 
  ShoppingBag, 
  BookOpenCheck,
  RotateCcw,
  Sparkles,
  MessageSquare,
  Headset,
  ArrowRightLeft,
  CheckCircle2,
  PhoneCall,
  Layers
} from 'lucide-react';
import { Product } from '../../types';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user' | 'staff' | 'system_handoff';
  text: string;
  recommendedProduct?: Product;
  timestamp: string;
  quickReplies?: string[];
  calculationResult?: ServingCalculationResult;
  handoffReason?: string;
  openComboBuilderAction?: boolean;
}

const STAFF_AVATAR = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80';

export const AIChatbotModal: React.FC = () => {
  const { isAIChatOpen, setIsAIChatOpen, setIsComboBuilderOpen, addToCart } = useStore();

  const [activeTab, setActiveTab] = useState<'chat' | 'faq_library' | 'calculator'>('chat');
  const [selectedFaqGroup, setSelectedFaqGroup] = useState<string>(TRAINED_FAQ_GROUPS[0].groupId);
  const [chatMode, setChatMode] = useState<'ai' | 'connecting_human' | 'human'>('ai');

  const [selectedProduct, setSelectedProduct] = useState<'biscotti' | 'tuiles'>('biscotti');
  const [servingsCount, setServingsCount] = useState<number>(2);
  const [calcResult, setCalcResult] = useState<ServingCalculationResult>(() => calculateServings('biscotti', 2));

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init',
      sender: 'ai',
      text: 'Chào bạn! Mình là **Trợ lý Dinh Dưỡng AI của SOWELL**.\n\nMình có thể hỗ trợ bạn tra cứu nhanh **Lượng Calo & Dinh dưỡng, Chế độ ăn kiêng/Dị ứng, Tự phối hộp Combo, Cách bảo quản và Chính sách giao hàng**.\n\nBạn đang quan tâm đến dòng bánh hay chế độ ăn nào, cứ nhắn cho mình nhé!',
      timestamp: 'Vừa xong',
      quickReplies: [
        'Một thanh bánh ngũ cốc SOWELL chứa bao nhiêu calo (kcal)?',
        'Tôi bị tiểu đường / đường huyết cao thì có ăn được bánh này không?',
        'Tôi muốn tự chọn các vị bánh khác nhau vào chung một hộp combo có được không?',
        'Bánh ngũ cốc SOWELL hạn sử dụng được bao lâu kể từ ngày sản xuất?',
        'Phí ship tính như thế nào? Đơn hàng bao nhiêu thì được Freeship?'
      ]
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeTab, chatMode]);

  const handleUpdateCalculation = (prod: 'biscotti' | 'tuiles', count: number) => {
    setSelectedProduct(prod);
    setServingsCount(count);
    setCalcResult(calculateServings(prod, count));
  };

  const handleSendCalculationToChat = () => {
    const text = `Một thanh bánh ngũ cốc SOWELL chứa bao nhiêu calo (kcal)? Mình định ăn ${servingsCount} khẩu phần ${selectedProduct === 'biscotti' ? 'Biscotti' : 'Bánh ngói hạnh nhân'}.`;
    handleSendMessage(text);
    setActiveTab('chat');
  };

  // Trigger handoff to human consultant
  const triggerHumanHandoff = (reason: string, userQuestionText?: string) => {
    setChatMode('connecting_human');

    // Add system handoff card
    setMessages((prev) => [
      ...prev,
      {
        id: `sys-handoff-${Date.now()}`,
        sender: 'system_handoff',
        text: 'Hệ thống đang chuyển cuộc trò chuyện sang Nhân viên tư vấn & Chuyên viên Dinh dưỡng SOWELL...',
        handoffReason: reason,
        timestamp: 'Vừa xong'
      }
    ]);

    // Simulate staff joining after 1.1s
    setTimeout(() => {
      setChatMode('human');
      const greetingText = userQuestionText
        ? `Chào bạn, mình là **Minh Anh – Chuyên viên tư vấn tại SOWELL** đây ạ.\n\nMình vừa tiếp nhận cuộc trò chuyện từ Trợ lý AI về câu hỏi của bạn (*"${userQuestionText}"*). Để đảm bảo thông tin chính xác nhất, mình xin phép trực tiếp kiểm tra và hỗ trợ cho bạn nhé.\n\nBạn có thể chia sẻ thêm nhu cầu hoặc để lại **SĐT / Zalo** để Minh Anh tư vấn nhanh nhất ạ!`
        : `Chào bạn, mình là **Minh Anh – Chuyên viên tư vấn tại SOWELL** đây ạ. Mình đã tiếp nhận cuộc trò chuyện từ Trợ lý AI. Bạn cần mình hỗ trợ chi tiết vấn đề gì ạ?`;

      setMessages((prev) => [
        ...prev,
        {
          id: `staff-${Date.now()}`,
          sender: 'staff',
          text: greetingText,
          timestamp: 'Vừa xong',
          quickReplies: [
            'Tư vấn kỹ khẩu phần ăn an toàn giúp mình',
            'Kiểm tra kỹ thành phần tại xưởng giúp mình',
            'Liên hệ Zalo / SĐT: 0988123456'
          ]
        }
      ]);
    }, 1100);
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Vừa xong'
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // If already connected to Human Consultant
    if (chatMode === 'human') {
      setTimeout(() => {
        const staffReply = processHumanConsultantReply(text);
        setMessages((prev) => [
          ...prev,
          {
            id: `staff-reply-${Date.now()}`,
            sender: 'staff',
            text: staffReply.text,
            recommendedProduct: staffReply.recommendedProduct,
            quickReplies: staffReply.quickReplies,
            timestamp: 'Vừa xong'
          }
        ]);
      }, 450);
      return;
    }

    // Otherwise process with AI Assistant first
    setTimeout(() => {
      const aiResponse = processUserQuestion(text);
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: aiResponse.text,
          recommendedProduct: aiResponse.recommendedProduct,
          quickReplies: aiResponse.needsHumanHandoff ? undefined : aiResponse.quickReplies,
          openComboBuilderAction: aiResponse.openComboBuilderAction,
          timestamp: 'Vừa xong'
        }
      ]);

      // If AI needs human support, notify and transfer to Human Consultant
      if (aiResponse.needsHumanHandoff) {
        setTimeout(() => {
          triggerHumanHandoff(
            aiResponse.handoffReason || 'Cần chuyên viên tư vấn hỗ trợ trực tiếp theo nhu cầu riêng',
            text
          );
        }, 500);
      }
    }, 350);
  };

  const handleResetChat = () => {
    setChatMode('ai');
    setMessages([
      {
        id: `msg-reset-${Date.now()}`,
        sender: 'ai',
        text: 'Chào bạn! Mình là **Trợ lý Dinh Dưỡng AI của SOWELL**.\n\nMình có thể giải đáp nhanh cho bạn về **Lượng Calo & Dinh dưỡng, Chế độ ăn kiêng/Dị ứng, Tự phối hộp Combo, Cách bảo quản và Chính sách giao hàng**.\n\nHôm nay bạn cần mình tư vấn thông tin gì ạ?',
        timestamp: 'Vừa xong',
        quickReplies: [
          'Một thanh bánh ngũ cốc SOWELL chứa bao nhiêu calo (kcal)?',
          'Tôi bị tiểu đường / đường huyết cao thì có ăn được bánh này không?',
          'Mua theo Combo 6 thanh hoặc 12 thanh thì được giảm giá bao nhiêu %?',
          'Phí ship tính như thế nào? Đơn hàng bao nhiêu thì được Freeship?'
        ]
      }
    ]);
  };

  if (!isAIChatOpen) return null;

  const currentFaqGroup = TRAINED_FAQ_GROUPS.find((g) => g.groupId === selectedFaqGroup) || TRAINED_FAQ_GROUPS[0];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-2xl w-full h-[90vh] sm:h-[86vh] shadow-2xl flex flex-col overflow-hidden border border-stone-200/80 relative animate-scaleUp">
        
        {/* Dynamic Header: Switches between AI Mode and Human Consultant Mode */}
        <div className={`border-b px-5 py-4 shrink-0 transition-colors ${
          chatMode === 'human' 
            ? 'bg-[#163824] text-white border-[#163824]' 
            : 'bg-white text-[#163824] border-stone-200/80'
        }`}>
          <div className="flex items-center justify-between gap-3">
            {chatMode === 'human' ? (
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <img
                    src={STAFF_AVATAR}
                    alt="Chuyên viên Minh Anh"
                    className="w-10 h-10 rounded-full object-cover border-2 border-emerald-300"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-[#163824]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm sm:text-base text-white">
                      Chuyên viên Minh Anh
                    </h3>
                    <span className="bg-emerald-400/20 text-emerald-200 border border-emerald-400/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Nhân viên tư vấn
                    </span>
                  </div>
                  <p className="text-xs text-emerald-100/80 mt-0.5">
                    Đang hỗ trợ trực tiếp cho bạn
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#163824] text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm sm:text-base text-[#163824]">
                      Trợ Lý Dinh Dưỡng SOWELL
                    </h3>
                    <span className="bg-[#EEF6F0] text-[#1E7547] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Hỗ trợ 24/7
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Tư vấn dinh dưỡng, chế độ ăn kiêng, phối hộp Combo & đơn hàng
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-1.5 shrink-0">
              {chatMode === 'ai' ? (
                <button
                  onClick={() => {
                    setActiveTab('chat');
                    triggerHumanHandoff('Khách hàng chủ động bấm kết nối Nhân viên tư vấn');
                  }}
                  className="hidden sm:flex items-center gap-1 bg-[#EEF6F0] hover:bg-[#E0F0E4] text-[#163824] px-2.5 py-1.5 rounded-full text-[11px] font-semibold transition-colors cursor-pointer"
                  title="Chuyển sang gặp nhân viên tư vấn"
                >
                  <Headset className="w-3.5 h-3.5 text-[#1E7547]" />
                  <span>Gặp nhân viên</span>
                </button>
              ) : (
                <button
                  onClick={() => setChatMode('ai')}
                  className="flex items-center gap-1 bg-white/15 hover:bg-white/25 text-white px-2.5 py-1.5 rounded-full text-[11px] font-semibold transition-colors cursor-pointer"
                  title="Quay lại chế độ AI tự động"
                >
                  <ArrowRightLeft className="w-3 h-3" />
                  <span>Về AI</span>
                </button>
              )}

              <button
                onClick={handleResetChat}
                className={`p-2 rounded-full transition-colors cursor-pointer ${
                  chatMode === 'human'
                    ? 'bg-white/10 hover:bg-white/20 text-white'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                }`}
                title="Làm mới cuộc trò chuyện"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsAIChatOpen(false)}
                className={`p-2 rounded-full transition-colors cursor-pointer ${
                  chatMode === 'human'
                    ? 'bg-white/10 hover:bg-white/20 text-white'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                }`}
                title="Đóng"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Clean Segmented Tabs */}
          <div className={`grid grid-cols-3 gap-1.5 mt-3.5 p-1 rounded-xl text-xs font-semibold ${
            chatMode === 'human' ? 'bg-white/10' : 'bg-stone-100'
          }`}>
            <button
              onClick={() => setActiveTab('chat')}
              className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'chat'
                  ? 'bg-white text-[#163824] shadow-2xs'
                  : chatMode === 'human'
                  ? 'text-emerald-100 hover:text-white'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{chatMode === 'human' ? 'Chat Nhân viên' : 'Chat Tư vấn'}</span>
            </button>
            <button
              onClick={() => setActiveTab('faq_library')}
              className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'faq_library'
                  ? 'bg-white text-[#163824] shadow-2xs'
                  : chatMode === 'human'
                  ? 'text-emerald-100 hover:text-white'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <BookOpenCheck className="w-3.5 h-3.5" />
              <span>Chủ đề thường gặp</span>
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'calculator'
                  ? 'bg-white text-[#163824] shadow-2xs'
                  : chatMode === 'human'
                  ? 'text-emerald-100 hover:text-white'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Tính khẩu phần</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          
          {/* TAB 2: FAQ TOPICS */}
          {activeTab === 'faq_library' && (
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/80 space-y-4">
              <div className="pb-3 border-b border-stone-100">
                <h4 className="font-bold text-sm text-[#163824]">
                  Các vấn đề khách hàng thường quan tâm
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Chọn nhanh câu hỏi bên dưới để Trợ lý Dinh dưỡng SOWELL giải đáp ngay cho bạn:
                </p>
              </div>

              {/* Group Pills */}
              <div className="flex flex-wrap gap-1.5">
                {TRAINED_FAQ_GROUPS.map((group) => {
                  const isActive = group.groupId === selectedFaqGroup;
                  return (
                    <button
                      key={group.groupId}
                      onClick={() => setSelectedFaqGroup(group.groupId)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#163824] text-white shadow-2xs'
                          : 'bg-[#FAF8F5] text-stone-600 hover:bg-stone-100 border border-stone-200/80'
                      }`}
                    >
                      {group.shortLabel}
                    </button>
                  );
                })}
              </div>

              {/* Active group header */}
              <div className="text-xs font-bold text-[#1E7547] pt-1">
                {currentFaqGroup.groupTitle}
              </div>

              {/* Questions list in active group */}
              <div className="space-y-2 pt-1">
                {currentFaqGroup.questions.map((qText, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (chatMode === 'human') setChatMode('ai');
                      handleSendMessage(qText);
                      setActiveTab('chat');
                    }}
                    className="w-full p-3 rounded-xl border border-stone-200/80 hover:border-[#1E7547] hover:bg-[#EEF6F0]/50 text-left transition-all cursor-pointer flex items-start justify-between gap-3 group"
                  >
                    <span className="font-medium text-xs sm:text-[13px] text-stone-800 group-hover:text-[#163824]">
                      {qText}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EEF6F0] text-[#1E7547] shrink-0 mt-0.5">
                      Hỏi ngay
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CALCULATOR TOOL */}
          {activeTab === 'calculator' && (
            <div className="bg-white rounded-2xl p-5 border border-stone-200/80 space-y-4">
              <div className="pb-2 border-b border-stone-100">
                <h4 className="font-bold text-sm text-[#163824]">Tính Chỉ Số Khẩu Phần & Đối Chiếu WHO</h4>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1.5">1. Chọn loại bánh:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleUpdateCalculation('biscotti', servingsCount)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      selectedProduct === 'biscotti'
                        ? 'border-[#163824] bg-[#EEF6F0]'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="font-bold text-xs text-[#163824]">Biscotti (3 vị)</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">Khẩu phần: 50g (~2 miếng)</div>
                  </button>
                  <button
                    onClick={() => handleUpdateCalculation('tuiles', servingsCount)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      selectedProduct === 'tuiles'
                        ? 'border-[#163824] bg-[#EEF6F0]'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="font-bold text-xs text-[#163824]">Bánh ngói hạnh nhân</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">Khẩu phần: 20g (2 bánh)</div>
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <label className="font-semibold text-stone-600">2. Số khẩu phần định ăn:</label>
                  <span className="font-bold text-[#1E7547]">
                    {servingsCount} khẩu phần ({calcResult.totalGrams}g)
                  </span>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 5, 10].map((num) => (
                    <button
                      key={num}
                      onClick={() => handleUpdateCalculation(selectedProduct, num)}
                      className={`flex-1 py-2 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                        servingsCount === num
                          ? 'bg-[#163824] text-white border-[#163824]'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-stone-200/70 space-y-3">
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200/70">
                    <span className="text-[10px] text-stone-400 block uppercase">Năng lượng</span>
                    <span className="font-bold text-[#163824] text-sm block mt-0.5">
                      {calcResult.calories} kcal
                    </span>
                    <span className="text-[10px] text-stone-400">{calcResult.caloriesPercentageOfWHO}% WHO</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200/70">
                    <span className="text-[10px] text-stone-400 block uppercase">Đường</span>
                    <span className="font-bold text-[#163824] text-sm block mt-0.5">
                      {calcResult.sugar}g
                    </span>
                    <span className="text-[10px] text-stone-400">{calcResult.sugarPercentageOfWHO}% WHO</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200/70">
                    <span className="text-[10px] text-stone-400 block uppercase">Đạm</span>
                    <span className="font-bold text-[#1E7547] text-sm block mt-0.5">
                      {calcResult.protein}g
                    </span>
                    <span className="text-[10px] text-stone-400">trên {calcResult.totalGrams}g</span>
                  </div>
                </div>

                <div className="text-[11px] text-stone-600 bg-white p-3 rounded-xl border border-stone-200/70 leading-relaxed">
                  <strong>Chi tiết:</strong> {calcResult.formulaText}
                </div>

                <button
                  onClick={handleSendCalculationToChat}
                  className="w-full bg-[#163824] hover:bg-[#1E7547] text-white py-2.5 rounded-full font-semibold text-xs transition-colors cursor-pointer"
                >
                  Gửi câu hỏi về lượng ăn này vào khung chat
                </button>
              </div>
            </div>
          )}

          {/* TAB 1: CHAT MESSAGES STREAM */}
          {activeTab === 'chat' && messages.map((msg) => {
            // Render System Handoff Card
            if (msg.sender === 'system_handoff') {
              return (
                <div key={msg.id} className="my-3 animate-fadeIn">
                  <div className="bg-amber-50/90 border border-amber-200/90 rounded-2xl p-4 text-xs space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-900 flex items-center gap-1.5">
                        <Headset className="w-4 h-4 text-amber-700" />
                        <span>Chuyển tiếp sang Nhân viên tư vấn SOWELL</span>
                      </span>
                      {chatMode === 'human' ? (
                        <span className="bg-emerald-100 text-[#163824] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#1E7547]" />
                          Đã kết nối
                        </span>
                      ) : (
                        <span className="bg-amber-200/80 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                          Đang kết nối...
                        </span>
                      )}
                    </div>

                    {msg.handoffReason && (
                      <p className="text-amber-800/90 text-[11px]">
                        <strong>Lý do chuyển:</strong> {msg.handoffReason}
                      </p>
                    )}

                    <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px] text-amber-900">
                      <span>Người tiếp nhận: <strong>Chuyên viên Minh Anh</strong></span>
                      <span className="flex items-center gap-1 text-[#1E7547] font-semibold">
                        <PhoneCall className="w-3 h-3" />
                        Hotline: 1900 6828
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

            const isUser = msg.sender === 'user';
            const isStaff = msg.sender === 'staff';

            return (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                {/* Avatar */}
                {!isUser && (
                  isStaff ? (
                    <div className="relative shrink-0 mt-1">
                      <img
                        src={STAFF_AVATAR}
                        alt="Minh Anh"
                        className="w-8 h-8 rounded-full object-cover border border-[#1E7547]"
                      />
                      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#163824] text-white flex items-center justify-center shrink-0 mt-1">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                    </div>
                  )
                )}
                
                <div className={`max-w-[85%] space-y-1.5 ${isUser ? 'items-end' : 'items-start'}`}>
                  {/* Sender Label for Staff */}
                  {isStaff && (
                    <span className="text-[10px] font-bold text-[#1E7547] px-1 flex items-center gap-1">
                      <span>Minh Anh • Nhân viên tư vấn SOWELL</span>
                    </span>
                  )}

                  <div
                    className={`rounded-2xl p-4 text-xs sm:text-[13px] leading-relaxed ${
                      isUser
                        ? 'bg-[#163824] text-white rounded-tr-xs'
                        : isStaff
                        ? 'bg-white text-stone-800 border-2 border-[#1E7547]/35 rounded-tl-xs shadow-xs'
                        : 'bg-white text-stone-700 border border-stone-200/80 rounded-tl-xs shadow-2xs'
                    }`}
                  >
                    <div 
                      className="whitespace-pre-line"
                      dangerouslySetInnerHTML={{ 
                        __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-stone-900">$1</strong>') 
                      }} 
                    />

                    {/* Action button to open Custom Combo Builder directly when answering Group 3 questions */}
                    {msg.openComboBuilderAction && (
                      <div className="mt-3 pt-2.5 border-t border-stone-100">
                        <button
                          onClick={() => {
                            setIsAIChatOpen(false);
                            setIsComboBuilderOpen(true);
                          }}
                          className="w-full bg-[#EEF6F0] hover:bg-[#163824] text-[#163824] hover:text-white border border-[#1E7547]/30 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                        >
                          <Layers className="w-4 h-4" />
                          <span>Mở COMBO Mix Vị Tự Chọn (Ưu đãi đến -25%)</span>
                        </button>
                      </div>
                    )}

                    {/* Recommended Product Card Inside Message */}
                    {msg.recommendedProduct && (
                      <div className="mt-3 bg-[#FAF8F5] rounded-xl p-3 border border-stone-200/80 space-y-2.5">
                        <div className="flex gap-3 items-center">
                          <img
                            src={msg.recommendedProduct.images[0]}
                            alt={msg.recommendedProduct.name}
                            className="w-12 h-12 rounded-lg object-cover shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <h5 className="font-bold text-xs text-[#163824] truncate">
                              {msg.recommendedProduct.name}
                            </h5>
                            <div className="flex items-center gap-2 mt-0.5 text-[11px]">
                              <span className="font-bold text-[#1E7547]">
                                {msg.recommendedProduct.price.toLocaleString('vi-VN')}₫
                              </span>
                              <span className="text-stone-400">
                                • {msg.recommendedProduct.nutrition.calories} kcal
                              </span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => addToCart(msg.recommendedProduct!, 1)}
                          className="w-full bg-[#163824] hover:bg-[#1E7547] text-white py-2 rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Thêm vào giỏ</span>
                        </button>
                      </div>
                    )}

                    {/* Quick replies */}
                    {msg.quickReplies && (
                      <div className="mt-3 flex flex-wrap gap-1.5 pt-2.5 border-t border-stone-100">
                        {msg.quickReplies.map((reply, i) => (
                          <button
                            key={i}
                            onClick={() => handleSendMessage(reply)}
                            className="text-[11px] bg-[#FAF8F5] hover:bg-[#EEF6F0] text-[#163824] border border-stone-200/80 px-2.5 py-1 rounded-full font-medium transition-colors cursor-pointer text-left"
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          <div ref={chatBottomRef} />
        </div>

        {/* Bottom Input */}
        <div className="p-3.5 bg-white border-t border-stone-200/80 shrink-0">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder={
                chatMode === 'human'
                  ? 'Nhắn tin trực tiếp với Chuyên viên Minh Anh (hoặc để lại SĐT/Zalo)...'
                  : 'Nhập câu hỏi về dinh dưỡng, chế độ ăn kiêng, phối hộp Combo hoặc đơn hàng...'
              }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 bg-[#FAF8F5] text-xs sm:text-sm px-4 py-2.5 rounded-full border border-stone-200/90 focus:outline-none focus:border-[#1E7547]"
            />
            <button
              onClick={() => handleSendMessage()}
              className="bg-[#163824] hover:bg-[#1E7547] text-white p-2.5 rounded-full transition-colors cursor-pointer shrink-0"
              title="Gửi tin nhắn"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
