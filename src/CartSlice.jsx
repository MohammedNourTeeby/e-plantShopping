import { createSlice } from '@reduxjs/toolkit';

// إنشاء الشريحة الخاصة بسلة التسوق
export const CartSlice = createSlice({
  name: 'cart', // اسم الشريحة
  initialState: {
    items: [], // الحالة الابتدائية للسلة، مصفوفة فارغة
  },
  reducers: {
    // إضافة عنصر إلى السلة
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // استخراج البيانات من الحمولة
      const existingItem = state.items.find(item => item.name === name); // التحقق من وجود العنصر مسبقًا
      if (existingItem) {
        existingItem.quantity++; // إذا كان العنصر موجودًا، زيادة الكمية
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // إذا لم يكن موجودًا، إضافة العنصر
      }
    },
    // إزالة عنصر من السلة
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload); // تصفية العناصر وإزالة المطابق
    },
    // تحديث كمية عنصر معين
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // استخراج اسم العنصر والكمية الجديدة
      const itemToUpdate = state.items.find(item => item.name === name); // البحث عن العنصر
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // تحديث الكمية إذا كان العنصر موجودًا
      }
    },
  },
});

// استخراج الإجراءات
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// تصدير المخفض
export default CartSlice.reducer;
