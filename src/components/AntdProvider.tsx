"use client";

import React from "react";
import { ConfigProvider, App as AntdApp } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import viVN from "antd/locale/vi_VN";

export default function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider
        locale={viVN}
        theme={{
          token: {
            colorPrimary: "#0f766e", // Teal-700 Azalea luxury medical brand
            colorPrimaryHover: "#115e59",
            colorSuccess: "#10b981",
            colorWarning: "#f59e0b",
            colorError: "#ef4444",
            colorInfo: "#0284c7",
            borderRadius: 12,
            fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          },
          components: {
            Button: {
              controlHeight: 44,
              borderRadius: 12,
              fontWeight: 600,
            },
            Card: {
              borderRadiusLG: 16,
            },
            Input: {
              controlHeight: 46,
              borderRadius: 12,
            },
            Select: {
              controlHeight: 46,
              borderRadius: 12,
            },
          },
        }}
      >
        <AntdApp>{children}</AntdApp>
      </ConfigProvider>
    </AntdRegistry>
  );
}
