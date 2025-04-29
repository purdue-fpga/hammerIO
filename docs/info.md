# Known Issues and Recommendations

## Power Supply and Current Draw

The total current draw for the DE10-Lite board and the extension shield with all peripherals active at once is estimated at 491.3 mA. This value at peak usage approaches the limit of the voltage regulator's capacity of 500mA. While it is unlikely that users will operate all peripherals simultaneously, given the shield’s primary use in educational settings, users should still exercise caution when using additional expansions, like PMOD. Individual current draw values for each component are summarized below.

| Peripheral                                | Part Number                     | Current Draw while Active (mA) | Number of Components | Total Current Draw (mA) | Justification  |
|-------------------------------------------|----------------------------------|-------------------------------|----------------------|--------------------------|----------------|
| LEDs                                      | 150141AS73100                   | 20                            | 8                    | 160                      | Datasheet      |
| ADC                                       | MAX11664                        | 1.67                          | 1                    | 1.67                     | Datasheet      |
| DAC                                       | AD7303                          | 2.3                           | 1                    | 0.75                     | Datasheet      |
| Audio Codec (General)                     | SSM2603                         | 19.6                          | 1                    | 19.6                     | Datasheet      |
| Audio Codec (Headphone Amplifier)         | SSM2603                         | 62.5                          | 1                    | 62.5                     | Datasheet      |
| Switch Pullup Resistors                   | N/A (10kΩ)                      | 0.33                          | 8                    | 2.64                     | Ohm’s Law      |
| LEDs (DE-10 Lite)                         | Unknown (330Ω current-limiting resistors) | 3.94           | 10                   | 39.4                     | Schematic      |
| Switch Pullup Resistors (DE-10 Lite)      | N/A (120kΩ)                     | 0.027                         | 10                   | 0.27                     | Schematic      |
| VGA Resistor Network (DE10-Lite)          | N/A (Resistance varies)         | 22.28                         | 1                    | 22.28                    | Schematic      |
| SDRAM (DE10-Lite)                         | IS42S16320D                     | 180                           | 1                    | 180                      | Datasheet      |
| Accelerometer (DE10-Lite)                 | ADXL345                         | 0.14                          | 1                    | 0.14                     | Datasheet      |
| FPGA (DE10-Lite)                          | 10M50DAF484                     | 0.60                          | 1                    | 0.60                     | Datasheet      |

## Clock Source Configuration

During testing, it was observed that using multiple clock sources to drive peripherals resulted in unexpected behavior in the Quartus software, including irregular placement of logic gates. To mitigate this issue, users should configure the FPGA to use a single clock source with appropriate clock dividers for different devices. This approach ensures stable and reliable operation of the shield.

## Signal Observation via Test Points

The board features multiple test points for signals, including the audio codec signals, I2C and SPI interfaces pins, and intermediate signals from PS/2, DAC and ADC. Users should exercise caution when probing these test points, as improper handling could lead to short circuit, noise interference or signal distortion.

## Jumper Configuration

Incorrect jumper settings for the ADC channels could result in unexpected input values. Users are encouraged to refer to the jumper configuration instructions and double-check their settings to ensure proper operation.

## Recommendations for Assembly

During installation, ensure that standoffs are securely tightened to avoid mechanical instability, which could damage the board or affect signal quality.
