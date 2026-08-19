import { IconPackageOff } from "@tabler/icons-react";

export default function ProductGridEmpty({ isSearchResult = false }: { isSearchResult?: boolean }) {
  return (
    <div className="flex min-h-80 w-full flex-col items-center justify-center text-center">
      <IconPackageOff className="mb-4 size-10" />
      <h2 className="text-lg font-semibold">
        {isSearchResult ? "Ничего не найдено" : "Товаров пока нет"}
      </h2>
      <p className="mt-1 text-sm">
        {isSearchResult ? "Попробуйте изменить поисковый запрос." : "Загляните сюда немного позже."}
      </p>
    </div>
  );
}
