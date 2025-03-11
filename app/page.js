"use client"
import Image from "next/image";
import React, { useState } from 'react';
import { ArrowRight, Hotel, DollarSign, Users, BarChart } from 'lucide-react';
import LoginPage from "./loginpage";
export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleComponent = () => {
      setIsOpen(!isOpen);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Hotel className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Landmart81HotelManager</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-gray-600 hover:text-gray-800">Tính năng</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-800">Bảng giá</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={toggleComponent}>
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <LoginPage/>
      )}

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Giải pháp Quản lý Khách sạn Thông minh
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Tối ưu hóa hoạt động kinh doanh của bạn với hệ thống quản lý khách sạn toàn diện
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center">
              Dùng thử miễn phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
              Xem demo
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Tính năng nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Hotel className="h-8 w-8 text-blue-600" />}
              title="Quản lý Phòng"
              description="Theo dõi tình trạng phòng thời gian thực, quản lý đặt phòng và check-in/check-out dễ dàng"
            />
            <FeatureCard 
              icon={<DollarSign className="h-8 w-8 text-blue-600" />}
              title="Quản lý Giá"
              description="Thiết lập giá linh hoạt theo mùa, điều chỉnh giá theo nhu cầu thị trường"
            />
            <FeatureCard 
              icon={<BarChart className="h-8 w-8 text-blue-600" />}
              title="Kết nối Trip.com"
              description="Tích hợp API với Trip.com, đồng bộ hóa đặt phòng tự động"
            />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Bảng giá</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Cơ bản"
              price="499k"
              features={[
                "Quản lý đến 20 phòng",
                "Báo cáo cơ bản",
                "Hỗ trợ email"
              ]}
            />
            <PricingCard 
              title="Chuyên nghiệp"
              price="999k"
              features={[
                "Quản lý không giới hạn phòng",
                "Báo cáo nâng cao",
                "Kết nối API Trip.com",
                "Hỗ trợ 24/7"
              ]}
              highlighted={true}
            />
            <PricingCard 
              title="Doanh nghiệp"
              price="Liên hệ"
              features={[
                "Tất cả tính năng Chuyên nghiệp",
                "API tùy chỉnh",
                "Hỗ trợ triển khai",
                "SLA đảm bảo"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const PricingCard = ({ title, price, features, highlighted = false }) => {
  return (
    <div className={`p-6 rounded-lg ${highlighted ? 'bg-blue-50 border-2 border-blue-600' : 'bg-white border border-gray-200'}`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}<span className="text-gray-600 text-base">/tháng</span></div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <div className="h-2 w-2 bg-blue-600 rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 px-4 py-2 rounded-lg ${
        highlighted 
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
      }`}>
        Chọn gói
      </button>
    </div>
  );
}
