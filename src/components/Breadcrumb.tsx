import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/hooks/public';
import { selectBreadcrumb, setBreadcrumb } from '@/store/reducer/layoutSlice';
import { MenuItem } from '@/config';

/**
 * Layout面包屑
 * @param {Array<String | {name: String; path: String}>} data
 * @returns
 */
export default function LayoutBreadcrumb() {
  const breadcrumb = useAppSelector(selectBreadcrumb);
  return breadcrumb.length > 0 ? (
    <Breadcrumb separator=">">
      {breadcrumb.map((item) => {
        if (typeof item === 'object') {
          return (
            <Breadcrumb.Item key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </Breadcrumb.Item>
          );
        }
        return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  ) : (
    <div style={{ height: 16 }} />
  );
}

interface UseBreadcrumbfromMenuDataProps {
  menu: MenuItem[];
  selectKey?: string;
  openKeys: string[];
}

/**
 * 渲染来自菜单数据的面包屑
 */
export function useBreadcrumbfromMenuData({
  menu,
  selectKey,
  openKeys
}: UseBreadcrumbfromMenuDataProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!selectKey) {
      return;
    }
    // console.log('useBreadcrumb_paths: ', openKeys);
    const breadcrumbPath: string[] = [];
    openKeys.reduce((data, openkey: string, i, arr) => {
      const currentLevel = (data.find((menuitem) => menuitem.key === openkey) ||
        {}) as MenuItem;
      breadcrumbPath.push(currentLevel.label);
      if (i === arr.length - 1) {
        const selectMenuItem = (currentLevel?.children || []).find(
          (mitem: MenuItem) => mitem.key === selectKey
        );
        selectMenuItem && breadcrumbPath.push(selectMenuItem.label);
      }
      return currentLevel?.children || [];
    }, menu);
    dispatch(setBreadcrumb(breadcrumbPath));
  }, [selectKey]);
}
