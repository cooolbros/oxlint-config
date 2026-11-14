```bash
pnpm add -D github:cooolbros/oxlint-config
```

```typescript
import { defineConfig } from "oxlint"
import config from "oxlint-config"

export default defineConfig({
	extends: [config]
})
```
