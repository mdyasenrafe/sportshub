import React from "react";
import { colors } from "../../../../theme/color";
import { Container, Text, TextVariant } from "../../../../components/atoms";

export const FeatureProducts = () => {
  return (
    <section className="py-40 relative">
      <Container>
        <div>
          <div className="text-center">
            <Text variant={TextVariant.H1} className="text-center">
              Feature Products
            </Text>
            <Text
              variant={TextVariant.P3}
              className="mt-[8px]"
              style={{ color: colors.darkGray }}
            >
              Discover our latest featured products and explore their unique
              features.
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
};
