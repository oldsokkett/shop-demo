import { Button } from "#/components/ui/button";
import { IconAlertTriangle, IconRefresh } from "@tabler/icons-react";

export default function ProductGridError({ onRetry }: { onRetry: () => void }) {
  return (
    <div
      className="flex min-h-80 w-full flex-col items-center justify-center text-center"
      role="alert"
    >
      <IconAlertTriangle className="mb-4 size-10 text-destructive" />
      <h2 className="text-lg font-semibold">Не удалось загрузить товары</h2>
      <p className="mt-1 max-w-md text-sm text-muted-foreground">
        Проверьте подключение к интернету и попробуйте ещё раз.
      </p>
      <Button className="mt-5" variant="outline" onClick={onRetry}>
        <IconRefresh />
        Попробовать снова
      </Button>
    </div>
  );
}
