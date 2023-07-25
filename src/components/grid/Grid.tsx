import { Grid, Col, Card, Text, Metric, GridProps, ColProps } from "@tremor/react";

interface IGridProps extends GridProps {
    children: string;
  }

export const DefaultGrid = ({
    numItems,
    numItemsSm,
    numItemsMd,
    numItemsLg,
    children,
}: IGridProps) => {
return (
    <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-4">
        <Col numColSpan={1} numColSpanLg={2} >
            <Card>
                <Text className="font-medium text-xl">
                    {children}
                </Text>
            </Card>
        </Col>
        <Col>
            <Card>
                <Text className=" font-medium text-xl">
                    {children}
                </Text>
            </Card>
        </Col>
            <Card>
                <Text className=" font-medium text-xl">
                    {children}
                </Text>
            </Card>
        <Col>
            <Card>
                <Text className=" font-medium text-xl">
                    {children}
                </Text>
            </Card>
        </Col>
        <Col>
            <Card>
                <Text className=" font-medium text-xl">
                    {children}
                </Text>
            </Card>
        </Col>
    </Grid>
    );
};
    