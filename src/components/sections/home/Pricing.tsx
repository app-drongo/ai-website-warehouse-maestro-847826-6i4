'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  badge: 'Flexible Pricing',
  mainTitle: 'Scale Your Warehouse Operations',
  mainTitleHighlight: 'Without Breaking the Bank',
  mainDescription:
    'Choose the perfect plan for your warehouse size and complexity. Start with our free trial and upgrade as your business grows. No setup fees, no long-term contracts.',
  billingMonthly: 'Monthly',
  billingAnnual: 'Annual',
  billingAnnualBadge: 'Save 25%',
  plan1Name: 'Starter Warehouse',
  plan1Description: 'Perfect for small warehouses and distribution centers',
  plan1Price: '$299',
  plan1Period: '/month',
  plan1CTA: 'Start Free Trial',
  plan1CTAHref: '/',
  plan2Name: 'Professional',
  plan2Description: 'Complete solution for growing logistics operations',
  plan2Price: '$799',
  plan2Period: '/month',
  plan2Badge: 'Most Popular',
  plan2CTA: 'Start Free Trial',
  plan2CTAHref: '/',
  plan2Trial: '30-day free trial • Implementation support included',
  plan3Name: 'Enterprise',
  plan3Description: 'Advanced ERP for large-scale warehouse networks',
  plan3Price: 'Custom',
  plan3Badge: 'Best Value',
  plan3CTA: 'Get Custom Quote',
  plan3CTAHref: '/',
  bottomTitle: 'Need a custom warehouse solution?',
  bottomDescription:
    'Our enterprise team specializes in complex multi-warehouse implementations with custom integrations, advanced analytics, and dedicated support for logistics operations at scale.',
  bottomCTA: 'Schedule Consultation',
  bottomCTAHref: '/',
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: config.plan1Name,
      description: config.plan1Description,
      price: config.plan1Price,
      period: config.plan1Period,
      badge: null,
      features: [
        'Up to 10,000 SKUs',
        'Basic inventory tracking',
        'Order management',
        'Barcode scanning',
        'Standard reporting',
        'Email support',
        'Mobile app access',
        '2 warehouse locations',
      ],
      cta: config.plan1CTA,
      ctaHref: config.plan1CTAHref,
      popular: false,
    },
    {
      name: config.plan2Name,
      description: config.plan2Description,
      price: config.plan2Price,
      period: config.plan2Period,
      badge: config.plan2Badge,
      features: [
        'Unlimited SKUs',
        'Advanced inventory optimization',
        'Multi-channel order processing',
        'RFID & barcode support',
        'Real-time analytics dashboard',
        'Priority phone support',
        'API integrations',
        'Unlimited warehouse locations',
        'Automated reorder points',
        'Pick path optimization',
      ],
      cta: config.plan2CTA,
      ctaHref: config.plan2CTAHref,
      popular: true,
    },
    {
      name: config.plan3Name,
      description: config.plan3Description,
      price: config.plan3Price,
      period: '',
      badge: config.plan3Badge,
      features: [
        'Everything in Professional',
        'Custom ERP integrations',
        'Advanced forecasting AI',
        'Multi-company management',
        '24/7 dedicated support',
        'Custom reporting suite',
        'White-label options',
        'Dedicated account manager',
        'On-site training included',
        'SLA guarantees',
      ],
      cta: config.plan3CTA,
      ctaHref: config.plan3CTAHref,
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-accent/10 border-accent/20">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                billingCycle === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span data-editable="billingMonthly">{config.billingMonthly}</span>
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2',
                billingCycle === 'annual'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span data-editable="billingAnnual">{config.billingAnnual}</span>
              <Badge variant="secondary" className="text-xs bg-accent/20 text-accent-foreground">
                <span data-editable="billingAnnualBadge">{config.billingAnnualBadge}</span>
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 lg:scale-105 bg-gradient-to-br from-primary/5 via-background to-accent/5'
                  : 'border-border/50 hover:border-primary/20 bg-card'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-lg">
                    <Star className="size-3 mr-1 fill-current" />
                    <span data-editable="plan2Badge">{plan.badge}</span>
                  </Badge>
                </div>
              )}

              <CardHeader className={cn('relative text-center pb-8', plan.popular && 'pt-10')}>
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit bg-accent/10 border-accent/20"
                  >
                    <span data-editable="plan3Badge">{plan.badge}</span>
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2 text-foreground">
                  <span data-editable={`plan${index + 1}Name`}>{plan.name}</span>
                </CardTitle>
                <CardDescription className="text-base mb-6">
                  <span data-editable={`plan${index + 1}Description`}>{plan.description}</span>
                </CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">
                    <span data-editable={`plan${index + 1}Price`}>{plan.price}</span>
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground mb-1">
                      <span data-editable={`plan${index + 1}Period`}>{plan.period}</span>
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={cn(
                    'w-full text-base py-6 transition-all duration-300',
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl'
                      : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                  )}
                  variant={plan.popular ? 'default' : 'secondary'}
                  onClick={() => navigate(plan.ctaHref)}
                  data-editable-href={`plan${index + 1}CTAHref`}
                  data-href={plan.ctaHref}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  <span data-editable={`plan${index + 1}CTA`}>{plan.cta}</span>
                </Button>

                {plan.name === config.plan2Name && (
                  <p className="text-center text-sm text-muted-foreground">
                    <span data-editable="plan2Trial">{config.plan2Trial}</span>
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            <span data-editable="bottomTitle">{config.bottomTitle}</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            <span data-editable="bottomDescription">{config.bottomDescription}</span>
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/20 hover:bg-primary/5 hover:border-primary/40"
            onClick={() => navigate(config.bottomCTAHref)}
            data-editable-href="bottomCTAHref"
            data-href={config.bottomCTAHref}
          >
            <span data-editable="bottomCTA">{config.bottomCTA}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
