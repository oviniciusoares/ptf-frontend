import { Injectable } from '@angular/core';

export type FeatureKey = 'projetos';

/**
 * Mapa de feature flags do portfólio.
 * Para habilitar ou desabilitar uma jornada, altere o valor aqui.
 */
const FEATURE_FLAGS: Record<FeatureKey, boolean> = {
  projetos: false,
};

@Injectable({ providedIn: 'root' })
export class FeatureToggleService {
  isEnabled(key: FeatureKey): boolean {
    return FEATURE_FLAGS[key];
  }
}
