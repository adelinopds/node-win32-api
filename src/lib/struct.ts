// windows data types struct for ref module https://github.com/TooTallNate/ref

import * as D from './windef';

/**
 * Struct usage:
 *
 * import Struct from 'ref-struct';
 * import {User32 as U} from 'win32-api';
 *
 * const point = new Struct(U.POINT)();
 * point.x = 100;
 * point.y = 200;
 *
 */

export const UNICODE_STRING = {
    Length: D.USHORT,
    MaximumLength: D.USHORT,
    Buffer: D.PWSTR,
};


export const INITCOMMONCONTROLSEX = {
    dwSize: D.DWORD,
    dwICC: D.DWORD,
};

export const MSG = {
    hwnd: D.HWND,
    message: D.UINT,
    wParam: D.WPARAM,
    lParam: D.LPARAM,
    time: D.DWORD,
    pt: D.POINT,
};

export const POINT = {
    x: D.LONG,
    y: D.LONG,
};

// https://msdn.microsoft.com/zh-cn/library/windows/desktop/ms633577(v=vs.85).aspx
export const WNDCLASSEX = {
    cbSize: D.UINT,
    style: D.UINT,
    //'lpfnWndProc': ffi.Function('int32', ['pointer', 'uint32', 'int32', 'uint32']) ,
    lpfnWndProc: D.WNDPROC,
    cbClsExtra: D.INT,
    cbWndExtra: D.INT,
    hInstance: D.HINSTANCE, // can be 0?
    hIcon: D.HICON,
    hCursor: D.HCURSOR,
    hbrBackground: D.HBRUSH,
    lpszMenuName: D.LPCTSTR,
    lpszClassName: D.LPCTSTR,
    hIconSm: D.HICON,
};

export const WINDOWINFO = {
    cbSize: D.DWORD,
    rcWindow: D.RECT,
    rcClient: D.RECT,
    dwStyle: D.DWORD,
    dwExStyle: D.DWORD,
    dwWindowStatus: D.DWORD ,
    cxWindowBorders: D.UINT,
    cyWindowBorders: D.UINT,
    atomWindowType: D.ATOM,
    wCreatorVersion: D.WORD,
};

export const _RECT = {
    left: D.LONG,
    top: D.LONG,
    right: D.LONG,
    bottom: D.LONG,
};