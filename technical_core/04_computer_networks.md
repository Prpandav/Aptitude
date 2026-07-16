# Computer Networks - Master Notes

> Simple notes for aptitude tests, technical interviews, coding rounds, and quick revision.

A computer network connects devices so they can share data, services, and resources.

These notes use simple English. Each important point is explained in one or two short lines.

---

## Table of Contents

1. [Network Basics](#1-network-basics)
2. [Network Types](#2-network-types)
3. [Network Topologies](#3-network-topologies)
4. [OSI and TCP-IP Models](#4-osi-and-tcp-ip-models)
5. [Physical Layer](#5-physical-layer)
6. [Data Link Layer](#6-data-link-layer)
7. [Error Detection and Flow Control](#7-error-detection-and-flow-control)
8. [Ethernet and MAC](#8-ethernet-and-mac)
9. [IP Addressing](#9-ip-addressing)
10. [Subnetting](#10-subnetting)
11. [Network Layer](#11-network-layer)
12. [ARP, ICMP, DHCP, and NAT](#12-arp-icmp-dhcp-and-nat)
13. [Routing](#13-routing)
14. [Transport Layer](#14-transport-layer)
15. [TCP](#15-tcp)
16. [UDP](#16-udp)
17. [Application-Layer Protocols](#17-application-layer-protocols)
18. [Wireless Networks](#18-wireless-networks)
19. [Network Devices](#19-network-devices)
20. [Network Security](#20-network-security)
21. [Performance and Troubleshooting](#21-performance-and-troubleshooting)
22. [Cloud and Modern Networking](#22-cloud-and-modern-networking)
23. [Socket Programming Basics](#23-socket-programming-basics)
24. [Interview Questions](#24-interview-questions)
25. [MCQ Practice](#25-mcq-practice)
26. [Practical Problems](#26-practical-problems)
27. [Common Mistakes and Interview Tips](#27-common-mistakes-and-interview-tips)
28. [Rapid-Revision Cheat Sheet](#28-rapid-revision-cheat-sheet)

---

## 1. Network Basics

### Important Terms

- **Network:** A group of connected devices that exchange data.
- **Node:** Any device that takes part in a network.
- **Host:** A device with a network address that sends or receives data.
- **Link:** The path between two network devices.
- **Protocol:** A set of rules used for communication.
- **Packet:** A small unit of data sent through a network.
- **Frame:** A data-link unit used inside a local network.
- **Segment:** A transport-layer data unit, mainly used with TCP.
- **Bit:** The smallest data unit, with value `0` or `1`.
- **Bandwidth:** The maximum amount of data a link can carry in a given time.
- **Throughput:** The actual amount of useful data delivered in a given time.
- **Latency:** The time taken for data to travel from source to destination.
- **Jitter:** Change in packet delay over time.
- **Packet loss:** Packets that do not reach their destination.

### Main Uses of Networks

- Share files, printers, applications, and internet access.
- Support email, messaging, voice calls, and video meetings.
- Connect users to websites, databases, and cloud services.
- Allow remote access to systems and devices.
- Support distributed applications and online games.

### Communication Parts

```text
Sender → Medium → Receiver
           ↑
        Protocol
```

- **Sender:** Creates and sends the message.
- **Receiver:** Accepts and processes the message.
- **Medium:** Carries the signal through cable, fiber, or radio.
- **Protocol:** Defines format, timing, order, and error handling.

### Data Flow

- **Simplex:** Data moves in one direction only.
- **Half-duplex:** Both sides can send, but not at the same time.
- **Full-duplex:** Both sides can send at the same time.

---

## 2. Network Types

| Type | Simple Meaning | Example |
|---|---|---|
| PAN | Very small personal network | Phone connected to earbuds |
| LAN | Network inside a room, building, or campus area | Office Ethernet |
| WLAN | LAN that uses wireless radio | Home Wi-Fi |
| CAN | Connects networks across a campus | University network |
| MAN | Covers a city or large local area | City fiber network |
| WAN | Covers countries or large regions | Company branch network |
| Internet | Global network of connected networks | Public internet |
| Intranet | Private network used inside an organization | Employee portal |
| Extranet | Private network with limited partner access | Supplier portal |

### Client-Server Network

A client requests a service, and a server provides the service.

```text
Client → Request → Server
Client ← Response ← Server
```

Examples include browsers and web servers, or applications and database servers.

### Peer-to-Peer Network

Devices can act as both clients and servers without one central service for every task.

Peer-to-peer systems can be simple and distributed, but control and security may be harder.

---

## 3. Network Topologies

A topology describes how network devices and links are arranged.

### Bus

All devices share one main cable; it is simple but the main cable can become a single failure point.

### Star

Every device connects to a central switch or hub; one device-link failure affects only that device.

### Ring

Each device connects to two neighbors; data moves around the ring according to the design.

### Mesh

Devices have many direct links; it gives strong redundancy but needs more links and cost.

### Tree

Several star networks connect in levels; it is common in larger structured networks.

### Hybrid

A hybrid topology combines two or more topology types.

| Topology | Main Benefit | Main Problem |
|---|---|---|
| Bus | Low cable use | Shared cable failure/collision risk |
| Star | Easy management | Central device is important |
| Ring | Ordered access | Breaks can disturb the ring |
| Mesh | High reliability | High cost and complexity |
| Tree | Easy expansion | Depends on upper-level links/devices |

---

## 4. OSI and TCP-IP Models

Layering divides communication work into smaller parts. Each layer gives services to the layer above it.

### OSI Model

| Layer | Name | Main Work | Common Examples |
|---:|---|---|---|
| 7 | Application | Network services used by applications | HTTP, DNS, SMTP |
| 6 | Presentation | Format, encoding, encryption, compression | TLS concepts, UTF-8 |
| 5 | Session | Starts, manages, and ends sessions | Session control |
| 4 | Transport | End-to-end delivery between applications | TCP, UDP |
| 3 | Network | Logical addressing and routing | IP, ICMP |
| 2 | Data Link | Local delivery, frames, and MAC addresses | Ethernet, Wi-Fi |
| 1 | Physical | Sends raw bits as signals | Cable, fiber, radio |

Memory sentence:

```text
All People Seem To Need Data Processing
Application Presentation Session Transport Network Data-Link Physical
```

### TCP/IP Model

| TCP/IP Layer | Similar OSI Layers | Examples |
|---|---|---|
| Application | 7, 6, 5 | HTTP, DNS, SSH, SMTP |
| Transport | 4 | TCP, UDP |
| Internet | 3 | IPv4, IPv6, ICMP |
| Link/Network Access | 2, 1 | Ethernet, Wi-Fi, physical media |

The TCP/IP model describes the internet protocol suite used in real networks.

### Encapsulation

Each sending layer adds control information around data.

```text
Application Data
    ↓ add TCP/UDP header
Segment/Datagram
    ↓ add IP header
Packet
    ↓ add frame header/trailer
Frame
    ↓ convert to signals
Bits
```

The receiver removes the information in reverse order, called decapsulation.

### Address at Each Level

- Application uses names such as URLs and domain names.
- Transport uses port numbers.
- Network uses IP addresses.
- Data link uses MAC addresses on the local link.

---

## 5. Physical Layer

The physical layer sends raw bits through electrical, light, or radio signals.

### Transmission Media

- **Twisted-pair cable:** Copper wire pairs used in common Ethernet networks.
- **Coaxial cable:** Shielded copper cable used in cable and older network systems.
- **Fiber-optic cable:** Sends light and supports high speed, distance, and noise resistance.
- **Radio:** Sends wireless signals through the air.
- **Microwave:** Uses high-frequency line-of-sight wireless links.
- **Satellite:** Relays signals over very large areas with noticeable delay.

### Twisted-Pair Types

- **UTP:** Unshielded cable that is common and affordable.
- **STP:** Shielded cable that gives more protection from electrical noise.

### Fiber Types

- **Single-mode fiber:** Uses a narrow light path for long distance and high capacity.
- **Multimode fiber:** Uses several light paths and is common for shorter links.

### Important Signal Terms

- **Frequency:** Number of signal cycles per second, measured in hertz.
- **Amplitude:** Strength or height of a signal.
- **Phase:** Position of a signal inside its cycle.
- **Attenuation:** Loss of signal strength over distance.
- **Noise:** Unwanted signal energy that can damage data.
- **SNR:** Signal-to-noise ratio that compares useful signal with noise.

### Transmission Modes

- **Serial transmission:** Sends bits one after another on a channel.
- **Parallel transmission:** Sends several bits at the same time on separate paths.
- **Baseband:** Uses the medium mainly for one digital signal system.
- **Broadband:** Divides capacity into several frequency channels.

---

## 6. Data Link Layer

The data link layer moves frames between devices on the same local link.

### Main Work

- Framing groups a bit stream into clear frame units.
- MAC addressing identifies local network interfaces.
- Error detection checks whether a frame changed during travel.
- Flow control prevents a fast sender from overwhelming a slow receiver.
- Media access rules decide when devices may use a shared channel.

### Sublayers

- **LLC:** Gives logical link services to the network layer.
- **MAC:** Handles local addresses and access to the shared medium.

### Framing Methods

- **Character count:** A header field tells the frame length.
- **Byte stuffing:** Escape bytes protect special byte markers inside data.
- **Bit stuffing:** Extra bits protect special bit patterns inside data.
- **Physical coding violation:** Reserved signal patterns mark frame boundaries.

### Switching

A Layer 2 switch learns source MAC addresses and stores them in a forwarding table.

```text
Known destination MAC   → send to one correct port
Unknown destination MAC → flood within the VLAN
Broadcast               → flood within the broadcast domain
```

Switch entries age out when they are not used for a period.

---

## 7. Error Detection and Flow Control

### Error Types

- **Single-bit error:** One bit changes value.
- **Burst error:** Two or more bits in a section are changed.

### Error Methods

- **Parity bit:** Adds one bit to make the number of `1` bits even or odd.
- **Checksum:** Adds data words and sends a result used for checking.
- **CRC:** Uses polynomial division and is strong for common burst errors.
- **Hamming code:** Adds check bits that can locate and correct limited bit errors.

CRC is mainly an error-detection method; it does not repair damaged data by itself.

### Flow and Error Control

- **Stop-and-Wait:** Sends one frame and waits for an acknowledgement.
- **Sliding Window:** Allows several frames to be sent before acknowledgements return.
- **ARQ:** Uses acknowledgements and retransmission to recover lost or damaged frames.

### ARQ Types

- **Stop-and-Wait ARQ:** Retransmits the current frame after timeout or negative result.
- **Go-Back-N:** Retransmits the missing/damaged frame and later frames in the window.
- **Selective Repeat:** Retransmits only missing or damaged frames and buffers others.

Selective Repeat uses bandwidth well but needs more receiver memory and logic.

---

## 8. Ethernet and MAC

Ethernet is the most common wired LAN technology.

### MAC Address

A MAC address is a link-layer interface identifier, commonly shown as 48 bits in hexadecimal.

```text
00:1A:2B:3C:4D:5E
```

- A unicast MAC identifies one interface.
- A broadcast MAC is `FF:FF:FF:FF:FF:FF`.
- A multicast MAC identifies a group of receivers.
- MAC addresses work mainly inside the current Layer 2 network.

### Ethernet Frame

```text
Preamble | Destination | Source | Type/Length | Data | FCS
```

- **Preamble:** Helps receiver timing and frame start detection.
- **Destination/Source:** Carry MAC addresses.
- **Type:** Identifies the upper-layer protocol.
- **FCS:** Contains a CRC result for error detection.

### Collision and Broadcast Domains

- A hub places connected devices in one collision domain.
- A switch creates a separate collision domain per port.
- A normal switch/VLAN is one broadcast domain until a router or Layer 3 boundary separates it.

### CSMA/CD

Classic shared half-duplex Ethernet listens before sending and detects collisions during transmission.

Modern switched full-duplex Ethernet does not use CSMA/CD for normal links because collisions do not occur in that design.

### VLAN

A VLAN creates a logical Layer 2 broadcast domain independent of physical switch location.

- **Access port:** Carries one VLAN for an end device.
- **Trunk port:** Carries several VLANs using tags such as IEEE 802.1Q.
- Communication between VLANs needs Layer 3 routing.

---

## 9. IP Addressing

An IP address identifies a network interface at the internet layer so packets can be routed.

### IPv4

IPv4 uses 32 bits and is normally written as four decimal numbers.

```text
192.168.10.25
```

Each number represents 8 bits and has a value from `0` to `255`.

### Network and Host Parts

A prefix length tells how many leading bits identify the network.

```text
192.168.10.25/24
Network part: 192.168.10
Host part:    25
```

### Important IPv4 Ranges

- **Private Class A range:** `10.0.0.0/8`.
- **Private Class B range:** `172.16.0.0/12`.
- **Private Class C range:** `192.168.0.0/16`.
- **Loopback:** `127.0.0.0/8`, commonly `127.0.0.1`.
- **Link-local/APIPA:** `169.254.0.0/16` when automatic local addressing is used.
- **Limited broadcast:** `255.255.255.255` for the local network only.
- **Unspecified/default:** `0.0.0.0` has context-based special meaning.

Private addresses are not directly routed on the public internet.

### Old Classful Addressing

| Class | First Octet Range | Default Prefix |
|---|---:|---:|
| A | 1–126 | `/8` |
| B | 128–191 | `/16` |
| C | 192–223 | `/24` |

Modern networks use CIDR rather than classful boundaries.

### IPv6

IPv6 uses 128 bits and is written as hexadecimal groups.

```text
2001:0db8:0000:0000:0000:ff00:0042:8329
```

Compression rules:

- Leading zeros inside a group may be removed.
- One longest run of zero groups may be replaced once with `::`.

```text
2001:db8::ff00:42:8329
```

### IPv6 Address Types

- **Global unicast:** Publicly routable IPv6 address.
- **Link-local:** Local-link address, normally under `fe80::/10`.
- **Unique local:** Private-like address under `fc00::/7`.
- **Multicast:** Sends to a group and replaces IPv4 broadcast use.
- **Loopback:** `::1`.
- **Unspecified:** `::`.

IPv6 does not use broadcast addresses.

---

## 10. Subnetting

Subnetting divides one IP network into smaller logical networks.

### Why Subnet?

- Reduce broadcast size.
- Organize teams, floors, or services.
- Improve address use and security policy.
- Create clear routing boundaries.

### Subnet Mask

A subnet mask has `1` bits for the network prefix and `0` bits for the host part.

| Prefix | Mask | Total Addresses |
|---:|---|---:|
| `/24` | `255.255.255.0` | 256 |
| `/25` | `255.255.255.128` | 128 |
| `/26` | `255.255.255.192` | 64 |
| `/27` | `255.255.255.224` | 32 |
| `/28` | `255.255.255.240` | 16 |
| `/29` | `255.255.255.248` | 8 |
| `/30` | `255.255.255.252` | 4 |

For normal IPv4 subnets:

```text
Total addresses = 2^(32 - prefix)
Traditional usable hosts = Total addresses - 2
```

The network address and directed broadcast address are traditionally not assigned to hosts; `/31` point-to-point links are a special supported case.

### Example: `192.168.1.70/26`

```text
Block size:        64
Ranges:            0–63, 64–127, 128–191, 192–255
Network address:   192.168.1.64
Broadcast address: 192.168.1.127
Host range:        192.168.1.65–192.168.1.126
```

### Subnetting Steps

1. Convert the prefix into host-bit count.
2. Calculate the block size in the changing octet.
3. Find the range containing the given address.
4. First address is the network address.
5. Last address is the broadcast address.
6. Addresses between them are normal host addresses.

### VLSM

Variable Length Subnet Masking gives different subnet sizes based on real host needs.

Allocate the largest subnet first so smaller spaces remain easier to fit.

### CIDR and Route Summary

CIDR uses flexible prefixes and can combine continuous networks into one route summary.

Summary networks must share the same leading bits and must be correctly aligned.

---

## 11. Network Layer

The network layer sends packets across different networks using logical addresses and routing.

### Main Work

- Logical IP addressing
- Route selection
- Packet forwarding
- Fragmentation rules
- Hop-limit control
- Error and control reporting through related protocols

### Router Forwarding

1. Receive a frame and check it.
2. Remove the local frame header.
3. Read the destination IP address.
4. Find the best route using longest-prefix match.
5. Reduce TTL or Hop Limit.
6. Build a new local frame for the next hop.

Routers change Layer 2 headers at each hop, while source and destination IP addresses normally stay the same unless NAT or another translation is used.

### IPv4 Header Fields

- Version identifies IPv4.
- Header length gives header size.
- Total length gives packet size.
- Identification and fragment fields support IPv4 fragmentation.
- TTL limits packet lifetime and prevents endless loops.
- Protocol identifies TCP, UDP, ICMP, or another next protocol.
- Header checksum checks the IPv4 header.
- Source and destination fields contain IPv4 addresses.

### Fragmentation

- **MTU:** Largest network-layer packet a link can carry without fragmentation.
- IPv4 routers may fragment packets unless the Don't Fragment rule prevents it.
- IPv6 routers do not fragment normal forwarded packets; the sending host handles packet size.
- Path MTU Discovery finds a usable packet size along the path.

---

## 12. ARP, ICMP, DHCP, and NAT

### ARP

ARP finds the local MAC address linked to an IPv4 address.

```text
ARP Request: Who has 192.168.1.1?
ARP Reply:   192.168.1.1 is at AA:BB:CC:DD:EE:FF
```

The result is stored for a limited time in an ARP cache.

For a remote destination, the host resolves the MAC address of its next-hop/default gateway, not the remote server's MAC.

IPv6 uses Neighbor Discovery instead of ARP.

### ICMP

ICMP carries network control and error information.

- Echo Request and Echo Reply are used by `ping`.
- Destination Unreachable reports delivery problems.
- Time Exceeded supports tools such as `traceroute`.
- ICMP errors do not make IP reliable, but they help control and diagnosis.

### DHCP

DHCP gives clients IP settings automatically.

```text
DORA: Discover → Offer → Request → Acknowledge
```

DHCP can provide an IP address, subnet mask, default gateway, DNS servers, lease time, and other options.

### NAT

NAT changes IP address information as packets move through a translating device.

- **Static NAT:** Fixed one-to-one address mapping.
- **Dynamic NAT:** Uses addresses from a public pool.
- **PAT/NAT overload:** Many private connections share one public address using port mappings.

NAT reduces direct end-to-end addressing and is not a replacement for firewall policy.

---

## 13. Routing

Routing chooses paths between networks, while forwarding sends each packet to its next hop.

### Routing Table

A route normally contains a destination prefix, next hop, outgoing interface, source/protocol, and metric.

### Route Selection

1. Choose the longest matching prefix.
2. If equal routes exist, compare route preference/administrative rules.
3. Compare protocol metrics where relevant.
4. Equal-cost routes may share traffic.

### Route Types

- **Connected route:** Learned from an active local interface.
- **Static route:** Entered by an administrator.
- **Default route:** Used when no more specific route matches.
- **Dynamic route:** Learned through a routing protocol.

### Routing Protocol Types

- **Distance-vector:** Shares route distance and direction with neighbors.
- **Link-state:** Builds a network map and calculates shortest paths.
- **Path-vector:** Carries path information between large routing domains.

### Common Protocols

- **RIP:** Distance-vector protocol using hop count; simple but limited.
- **OSPF:** Link-state interior protocol using cost and areas.
- **IS-IS:** Link-state interior protocol used in many large networks.
- **BGP:** Path-vector protocol used between autonomous systems on the internet.

### Routing Problems

- **Routing loop:** Packets repeat through routers until TTL/Hop Limit ends them.
- **Count-to-infinity:** Distance-vector routes slowly increase after failure.
- **Route flapping:** A route repeatedly appears and disappears.
- **Black hole:** A route accepts traffic but cannot deliver it.

Split horizon, route poisoning, hold-down behavior, sequence information, and link-state updates help with different routing problems.

---

## 14. Transport Layer

The transport layer provides communication between application processes on end hosts.

### Main Work

- Process-to-process delivery using ports
- Segmentation and reassembly
- Multiplexing several applications
- Reliability where the protocol provides it
- Flow control
- Congestion control

### Port Numbers

A port number identifies an application endpoint on a host.

| Range | General Use |
|---:|---|
| `0–1023` | Well-known/system ports |
| `1024–49151` | Registered ports |
| `49152–65535` | Dynamic/private ports by IANA convention |

A connection is identified by protocol plus source IP/port and destination IP/port.

### Multiplexing

Several applications can share one host IP because transport protocols use different port numbers and connection tuples.

---

## 15. TCP

TCP is a connection-oriented transport protocol that gives a reliable ordered byte stream.

### TCP Features

- Connection setup before normal data transfer
- Sequence numbers and acknowledgements
- Retransmission after detected loss
- Ordered byte delivery
- Error detection using a checksum
- Receiver flow control
- Network congestion control
- Full-duplex communication

TCP preserves byte order, not application message boundaries.

### Three-Way Handshake

```text
Client → SYN      → Server
Client ← SYN-ACK  ← Server
Client → ACK      → Server
```

The handshake confirms both directions and agrees on initial sequence state.

### Connection Close

A normal full close commonly uses separate FIN and ACK exchange for each direction because TCP is full duplex.

`TIME_WAIT` helps absorb delayed packets and protects a later connection using the same address/port tuple.

### Reliability

- Sequence numbers identify byte positions.
- ACKs tell the sender what data has arrived.
- Retransmission timers handle missing acknowledgement progress.
- Duplicate ACKs can support fast retransmission.
- Checksums detect many transmission errors.

### Flow Control

The receiver window tells the sender how much unacknowledged data the receiver can currently accept.

Flow control protects the receiver; congestion control protects the network.

### Congestion Control

- **Congestion window:** Sender-side limit based on network conditions.
- **Slow start:** Grows sending capacity quickly from a small starting point.
- **Congestion avoidance:** Uses slower growth after a threshold.
- **Fast retransmit:** Retransmits after strong duplicate-ACK evidence.
- **Fast recovery:** Avoids returning fully to the initial state after some losses.

Exact modern TCP algorithms differ between operating systems and configurations.

---

## 16. UDP

UDP is a connectionless transport protocol that sends independent datagrams with low protocol overhead.

### UDP Features

- No transport handshake
- No built-in delivery guarantee
- No built-in ordering
- No built-in retransmission
- Preserves datagram boundaries
- Supports unicast, multicast, and some broadcast use

Applications can add reliability or timing rules when needed.

### TCP vs. UDP

| TCP | UDP |
|---|---|
| Connection-oriented | Connectionless |
| Reliable ordered byte stream | Best-effort datagrams |
| Flow and congestion control | No built-in equivalent guarantees |
| More protocol state | Smaller header and less state |
| Web, SSH, email, files | DNS, streaming, games, real-time traffic |

Modern protocols such as QUIC build reliable secure streams over UDP in user space.

---

## 17. Application-Layer Protocols

### Common Protocols and Ports

| Protocol | Default Port | Simple Use |
|---|---:|---|
| HTTP | 80/TCP | Web communication without transport encryption |
| HTTPS | 443/TCP; HTTP/3 commonly over UDP | Secure web communication |
| DNS | 53/UDP and TCP | Name and service lookup |
| DHCP server/client | 67/68 UDP | Automatic IPv4 settings |
| FTP | 20/21 TCP traditionally | File transfer with separate control/data ideas |
| SSH | 22/TCP | Secure remote login and tunneling |
| Telnet | 23/TCP | Unencrypted remote terminal |
| SMTP | 25/587/465 TCP by use | Sending and relaying email |
| POP3 | 110/995 TCP | Download-oriented email access |
| IMAP | 143/993 TCP | Server-synchronized email access |
| NTP | 123/UDP | Time synchronization |
| SNMP | 161/162 UDP | Network monitoring and management |

Ports are defaults, not rules that cannot be changed.

### DNS

DNS translates names into records such as IP addresses and mail server information.

- **A:** Maps a name to an IPv4 address.
- **AAAA:** Maps a name to an IPv6 address.
- **CNAME:** Gives an alias to another name.
- **MX:** Identifies mail servers.
- **NS:** Identifies authoritative name servers.
- **TXT:** Stores text used for verification and policy.
- **PTR:** Supports reverse address-to-name lookup.

DNS resolution may involve browser/OS caches, a recursive resolver, root servers, TLD servers, and authoritative servers.

### HTTP

HTTP is a request-response application protocol.

- `GET` reads a representation.
- `POST` submits data or starts processing.
- `PUT` replaces a target representation under API rules.
- `PATCH` applies a partial update.
- `DELETE` requests target removal.

Status groups:

- `1xx` information
- `2xx` success
- `3xx` redirection
- `4xx` client-side request problem
- `5xx` server-side problem

HTTP is stateless at the protocol level; cookies, tokens, and server storage can maintain application sessions.

### HTTPS and TLS

HTTPS is HTTP carried through TLS to provide encryption, integrity, and authenticated server identity.

Certificates connect public keys to identities through a trust system; encryption alone does not prove that a server is the intended server.

---

## 18. Wireless Networks

Wireless networks send data through radio instead of a physical cable.

### Wi-Fi Terms

- **Access point:** Connects wireless clients to a local network.
- **SSID:** Human-readable wireless network name.
- **BSSID:** MAC address identifying a specific access point radio/interface.
- **Channel:** Selected radio-frequency range used for communication.
- **Roaming:** Client movement between access points in the same network service.
- **Signal strength:** Received radio power that affects link quality.
- **Interference:** Other radio energy that disturbs communication.

### Wi-Fi Bands

- **2.4 GHz:** Longer reach and better wall travel, but fewer clear channels and more interference.
- **5 GHz:** More channel space and speed, but often shorter reach.
- **6 GHz:** More clean spectrum for supported devices, with range limits similar to high-frequency Wi-Fi.

### CSMA/CA

Wi-Fi tries to avoid collisions by listening, waiting, using random backoff, and receiving acknowledgements.

Wireless devices cannot reliably detect every collision while sending, so Wi-Fi uses collision avoidance instead of Ethernet's classic CSMA/CD.

### Hidden Node Problem

Two clients may both reach the access point but may not hear each other, causing possible collisions at the access point.

RTS/CTS can reduce some hidden-node problems but adds extra messages.

### Wi-Fi Security

- **WEP:** Old and insecure; it should not be used.
- **WPA:** Older improvement but no longer the preferred standard.
- **WPA2:** Common security using strong AES-based protection when correctly configured.
- **WPA3:** Newer protection with improved password and enterprise security features.

Use strong authentication, current encryption, safe guest networks, and updated access-point software.

---

## 19. Network Devices

| Device | Simple Work | Main Layer |
|---|---|---|
| Repeater | Regenerates a weak signal | Physical |
| Hub | Repeats incoming bits to all other ports | Physical |
| Bridge | Connects LAN parts using MAC addresses | Data Link |
| Switch | Forwards frames using a learned MAC table | Data Link |
| Router | Forwards packets between IP networks | Network |
| Gateway | Translates or connects different systems/protocols | Varies |
| Modem | Converts signals for an access technology | Physical/Link |
| Access point | Connects wireless clients to a LAN | Data Link |
| Firewall | Allows or blocks traffic using security rules | Several layers |
| Load balancer | Distributes traffic across service instances | Layer 4 or 7 |
| Proxy | Sends application requests on behalf of clients | Application |

### Hub vs. Switch

A hub sends received bits to every other port; a switch learns MAC addresses and forwards frames more carefully.

### Switch vs. Router

A switch normally connects devices inside one Layer 2 network; a router connects different IP networks.

### Proxy Types

- **Forward proxy:** Acts for clients and controls or hides client access.
- **Reverse proxy:** Acts in front of servers and can route, secure, cache, or balance requests.

### Firewall Types

- **Packet filter:** Checks addresses, ports, protocols, and flags.
- **Stateful firewall:** Tracks connection state and allows related traffic.
- **Application firewall:** Understands application-level requests and rules.
- **Web application firewall:** Filters common HTTP application attacks.

---

## 20. Network Security

Network security protects data, devices, users, and services from unauthorized access and attack.

### Security Goals

- **Confidentiality:** Only allowed users can read data.
- **Integrity:** Unauthorized changes can be detected or prevented.
- **Availability:** Services remain usable when needed.
- **Authentication:** Confirms an identity.
- **Authorization:** Decides what an identity may do.
- **Non-repudiation:** Gives evidence that an action came from a stated source.

### Cryptography Basics

- **Plaintext:** Original readable data.
- **Ciphertext:** Encrypted unreadable form.
- **Symmetric encryption:** Uses the same secret key for encryption and decryption.
- **Asymmetric encryption:** Uses a public/private key pair.
- **Hash:** One-way value used to check data or support password storage designs.
- **Digital signature:** Uses a private key to prove origin and protect integrity.
- **Certificate:** Connects an identity with a public key through trusted signing.

Symmetric encryption is fast for data; asymmetric methods help with identity and key agreement.

### Common Attacks

- **Eavesdropping:** Secretly reads network traffic.
- **Spoofing:** Pretends to use another identity or address.
- **Man-in-the-middle:** Intercepts and may change communication between two sides.
- **Replay attack:** Sends a valid old message again.
- **DoS/DDoS:** Uses traffic or work to make a service unavailable.
- **Port scanning:** Tests ports to find reachable services.
- **DNS poisoning:** Places false DNS information into a cache or response path.
- **ARP spoofing:** Sends false local address mappings to redirect traffic.
- **Phishing:** Tricks users into giving secrets or running harmful actions.

### Security Tools

- **VPN:** Creates a protected tunnel over another network.
- **IDS:** Detects suspicious traffic or behavior.
- **IPS:** Detects and actively blocks selected threats.
- **Firewall:** Enforces traffic policy.
- **Network segmentation:** Limits communication and reduces attack movement.
- **Zero Trust:** Requires continued identity and policy checks instead of trusting network location alone.

Encryption does not replace access control, updates, monitoring, backups, or safe configuration.

---

## 21. Performance and Troubleshooting

### Delay Parts

```text
Total delay ≈ Processing + Queueing + Transmission + Propagation
```

- **Processing delay:** Time to inspect and handle a packet.
- **Queueing delay:** Time waiting behind other packets.
- **Transmission delay:** `Packet size / Link rate`.
- **Propagation delay:** `Distance / Signal speed`.

Bandwidth is capacity; latency is delay. A high-bandwidth path can still have high latency.

### Common Problems

- Wrong IP address, mask, gateway, or DNS settings
- Broken cable or weak Wi-Fi signal
- VLAN mismatch
- Missing or wrong route
- Firewall rule blocking traffic
- Duplicate IP address
- Duplex or speed mismatch on older/manual links
- Congestion, packet loss, or overloaded server
- DNS failure even when direct IP access works

### Troubleshooting Order

1. Check power, cable, Wi-Fi, and link status.
2. Check local IP address and subnet mask.
3. Test the local TCP/IP stack.
4. Test the default gateway.
5. Test a remote IP address.
6. Test DNS name resolution.
7. Check routes, ports, firewall rules, and application logs.

### Useful Commands

| Command | Main Use |
|---|---|
| `ipconfig` / `ip addr` | Show local IP settings |
| `ping` | Test reachability and delay using ICMP |
| `tracert` / `traceroute` | Show path hops toward a destination |
| `nslookup` / `dig` | Query DNS records |
| `arp` / `ip neigh` | Show local neighbor mappings |
| `route print` / `ip route` | Show routing information |
| `netstat` / `ss` | Show sockets and connections |
| `curl` | Test application and HTTP behavior |
| `tcpdump` / Wireshark | Capture and inspect packets |

Ping failure does not always mean the host is down because ICMP may be blocked.

### Packet Capture Method

Capture at the correct location, use a narrow filter, follow one connection, check timing/order, and protect sensitive captured data.

---

## 22. Cloud and Modern Networking

### Cloud Terms

- **Virtual network/VPC:** Logically isolated network space inside a cloud platform.
- **Subnet:** Address range placed in a selected virtual network area.
- **Route table:** Rules that select next hops for subnet traffic.
- **Security group:** Stateful traffic policy attached to cloud resources in many platforms.
- **Network ACL:** Often stateless subnet-level traffic policy, depending on the platform.
- **Internet gateway:** Connects supported public cloud resources to the internet.
- **NAT gateway:** Gives private resources outbound internet access without direct inbound exposure.
- **Peering:** Connects two virtual networks with direct private routing under limits.
- **Transit gateway/hub:** Connects many networks through one central routing service.

Cloud names and exact behavior differ between providers.

### Load Balancing

- **Layer 4 load balancer:** Distributes using transport addresses and connection information.
- **Layer 7 load balancer:** Understands HTTP-like content such as hosts, paths, and headers.
- **Health check:** Tests whether a backend should receive traffic.
- **Session persistence:** Tries to send one client to the same backend when required.

### CDN

A Content Delivery Network stores or serves content near users to reduce delay and origin load.

### Software-Defined Networking

SDN separates network control decisions from packet-forwarding devices and allows software-based central policy.

### Service Mesh

A service mesh adds service-to-service traffic features such as identity, encryption, retry policy, and observability through proxies or related components.

### Anycast

Anycast announces the same address from several locations so routing normally sends users to a nearby reachable location.

---

## 23. Socket Programming Basics

A socket is an application endpoint for network communication.

### TCP Server Flow

```text
socket() → bind() → listen() → accept() → read/write → close()
```

### TCP Client Flow

```text
socket() → connect() → read/write → close()
```

### UDP Flow

```text
socket() → sendto()/recvfrom() → close()
```

UDP servers normally bind to a local address but do not need TCP-style listen and accept steps.

### Important Socket Ideas

- A server binds to an address and port so clients can find it.
- A listening TCP socket creates a separate connected socket for each accepted client.
- TCP reads may return fewer bytes than requested because TCP is a byte stream.
- Applications must define message boundaries using length fields, delimiters, or fixed formats.
- Timeouts prevent a program from waiting forever.
- Partial writes and connection closure must be handled correctly.
- Network byte order is big-endian for standard internet fields.

### Simple Pseudocode

```text
server = create TCP socket
bind server to port 8080
listen for clients

while running:
    client = accept connection
    request = read complete application message
    write complete response
    close client
```

Production servers also need concurrency limits, input limits, secure protocols, error handling, logging, and graceful shutdown.

---

## 24. Interview Questions

### Q1. What is a computer network?

A computer network is a group of connected devices that share data and services using agreed protocols.

### Q2. What is a protocol?

A protocol is a set of rules for message format, order, timing, and error handling.

### Q3. Bandwidth vs. throughput?

Bandwidth is maximum link capacity, while throughput is the real useful data rate achieved.

### Q4. Latency vs. jitter?

Latency is packet travel time, while jitter is the change in that delay over time.

### Q5. Hub vs. switch?

A hub repeats bits to all ports, while a switch learns MAC addresses and forwards frames to selected ports.

### Q6. Switch vs. router?

A switch normally connects devices in one Layer 2 network, while a router forwards packets between IP networks.

### Q7. OSI vs. TCP/IP model?

OSI is a seven-layer reference model, while TCP/IP is the practical protocol model used by the internet.

### Q8. What is encapsulation?

Encapsulation is the process of adding each layer's header or trailer around data before transmission.

### Q9. MAC address vs. IP address?

A MAC address supports local-link delivery, while an IP address supports logical addressing and routing across networks.

### Q10. What is a VLAN?

A VLAN is a logical Layer 2 broadcast domain that separates devices without requiring separate physical switches.

### Q11. What is ARP?

ARP finds the local MAC address linked to a known IPv4 address.

### Q12. What is a default gateway?

A default gateway is the router next hop used for destinations outside the local subnet.

### Q13. What does a subnet mask do?

A subnet mask or prefix separates the network bits from the host bits of an IP address.

### Q14. Public vs. private IP address?

A public address can be globally routed, while a private address is used inside private networks and is not directly internet-routed.

### Q15. What is NAT?

NAT changes address information between networks, and PAT lets many connections share one public address through ports.

### Q16. TCP vs. UDP?

TCP gives a reliable ordered byte stream, while UDP sends independent best-effort datagrams with less protocol work.

### Q17. Flow control vs. congestion control?

Flow control protects the receiver, while congestion control protects the network path from too much traffic.

### Q18. Why does TCP use a three-way handshake?

It confirms both communication directions and agrees on starting sequence information.

### Q19. Why does TCP use `TIME_WAIT`?

It lets delayed packets expire and protects a later connection that uses the same address and port values.

### Q20. What is DNS?

DNS is a distributed naming system that returns records such as IP addresses for domain names.

### Q21. HTTP vs. HTTPS?

HTTPS carries HTTP through TLS for encryption, integrity, and authenticated server identity.

### Q22. What is DHCP DORA?

DORA means Discover, Offer, Request, and Acknowledge, the common IPv4 lease process.

### Q23. Static vs. dynamic routing?

Static routes are entered manually, while dynamic routes are learned and updated through routing protocols.

### Q24. Distance-vector vs. link-state routing?

Distance-vector shares route distance with neighbors, while link-state builds a network map and calculates paths.

### Q25. What is longest-prefix match?

A router chooses the matching route with the greatest number of fixed prefix bits.

### Q26. Firewall vs. proxy?

A firewall enforces traffic rules, while a proxy sends application requests on behalf of clients or servers.

### Q27. Symmetric vs. asymmetric encryption?

Symmetric encryption uses one shared secret key, while asymmetric encryption uses public and private keys.

### Q28. What happens when a URL is opened?

The client resolves DNS, finds a route, creates transport/security state, sends an HTTP request, and receives the response.

### Q29. Why may ping fail when a website works?

ICMP may be blocked even though TCP or UDP application traffic is allowed.

### Q30. VM network vs. container network?

VMs use virtual hardware and guest network stacks, while containers normally share the host kernel and use namespace-based virtual networking.

---

## 25. MCQ Practice

Try the questions before opening the answer key.

**1. Which device forwards frames using MAC addresses?**  
A. Switch  B. Router only  C. Modem only  D. Repeater

**2. Which OSI layer handles IP routing?**  
A. Physical  B. Data Link  C. Network  D. Session

**3. Which protocol finds an IPv4-to-MAC mapping locally?**  
A. DNS  B. ARP  C. HTTP  D. SMTP

**4. How many total addresses are in a `/26` IPv4 subnet?**  
A. 32  B. 64  C. 128  D. 256

**5. Which is a private IPv4 range?**  
A. `8.0.0.0/8`  B. `10.0.0.0/8`  C. `127.0.0.0/8`  D. `224.0.0.0/4`

**6. Which address is the IPv6 loopback?**  
A. `::1`  B. `0.0.0.0`  C. `fe80::`  D. `255.255.255.255`

**7. Which protocol automatically gives IP settings?**  
A. DHCP  B. ARP  C. FTP  D. ICMP

**8. Which routing protocol is used between autonomous systems?**  
A. BGP  B. ARP  C. TCP  D. Ethernet

**9. Which transport protocol preserves datagram boundaries?**  
A. TCP  B. UDP  C. HTTP  D. ARP

**10. Which TCP feature protects a slow receiver?**  
A. Flow control  B. DNS caching  C. VLAN tagging  D. NAT

**11. Which DNS record maps a name to an IPv6 address?**  
A. A  B. AAAA  C. MX  D. PTR

**12. Which port is normally used by HTTPS?**  
A. 22  B. 53  C. 80  D. 443

**13. Which topology connects each device to a central device?**  
A. Bus  B. Star  C. Ring  D. Full mesh only

**14. Which method is used by classic shared Ethernet?**  
A. CSMA/CD  B. CSMA/CA  C. Token only  D. DORA

**15. Which Wi-Fi method tries to avoid collisions?**  
A. CSMA/CA  B. CSMA/CD  C. NAT  D. BGP

**16. Which tool mainly tests DNS records?**  
A. `dig`  B. `chmod`  C. `mkdir`  D. `top`

**17. Which device separates IP broadcast networks?**  
A. Hub  B. Repeater  C. Router  D. Cable

**18. Which security goal prevents unauthorized reading?**  
A. Availability  B. Confidentiality  C. Routing  D. Throughput

**19. Which load balancer can route using an HTTP path?**  
A. Layer 1  B. Layer 2  C. Layer 7  D. Repeater

**20. Which delay equals packet size divided by link rate?**  
A. Propagation  B. Transmission  C. Queueing  D. Processing

<details>
<summary><strong>Answer key</strong></summary>

1. **A** — A switch forwards frames with a MAC table.
2. **C** — The network layer handles IP and routing.
3. **B** — ARP resolves local IPv4 neighbors.
4. **B** — `/26` leaves 6 host bits, so `2^6 = 64`.
5. **B** — `10.0.0.0/8` is private.
6. **A** — `::1` is the IPv6 loopback.
7. **A** — DHCP provides automatic settings.
8. **A** — BGP exchanges routes between autonomous systems.
9. **B** — UDP keeps datagram boundaries.
10. **A** — TCP flow control uses receiver capacity information.
11. **B** — AAAA records store IPv6 addresses.
12. **D** — HTTPS normally uses port 443.
13. **B** — A star uses a central device.
14. **A** — Classic shared Ethernet uses CSMA/CD.
15. **A** — Wi-Fi uses CSMA/CA.
16. **A** — `dig` queries DNS.
17. **C** — Routers separate IP broadcast domains.
18. **B** — Confidentiality protects against unauthorized reading.
19. **C** — Layer 7 understands HTTP paths.
20. **B** — Transmission delay is size divided by rate.

</details>

---

## 26. Practical Problems

### 1. Find Network and Broadcast Address

Given `192.168.20.140/27`:

```text
Host bits:         5
Block size:        32
Ranges:            0–31, 32–63, 64–95, 96–127, 128–159...
Network address:   192.168.20.128
Broadcast address: 192.168.20.159
Host range:        192.168.20.129–192.168.20.158
```

The address `140` falls inside the `128–159` block.

### 2. Choose a Prefix for 50 Hosts

Find host bits `h` where:

```text
2^h - 2 >= 50
```

`h = 6` gives `62` traditional usable host addresses, so the prefix is `/26`.

### 3. Number of `/27` Subnets Inside `/24`

```text
Borrowed bits = 27 - 24 = 3
Number of subnets = 2^3 = 8
```

Each `/27` subnet contains `32` total addresses.

### 4. Check Whether Two Hosts Share a Subnet

Hosts: `10.1.4.20/23` and `10.1.5.200/23`.

A `/23` changes in blocks of `2` in the third octet, so both are inside `10.1.4.0–10.1.5.255`.

They are in the same subnet.

### 5. Longest-Prefix Match

Routing table:

```text
10.0.0.0/8      → A
10.10.0.0/16    → B
10.10.5.0/24    → C
0.0.0.0/0       → D
```

Destination `10.10.5.25` uses route `C` because `/24` is the longest matching prefix.

### 6. Transmission Delay

Send a `1,500-byte` packet over a `10 Mbps` link:

```text
Bits = 1,500 × 8 = 12,000 bits
Delay = 12,000 / 10,000,000 seconds
      = 0.0012 seconds
      = 1.2 milliseconds
```

This answer does not include propagation, queueing, or processing delay.

### 7. Propagation Delay

For a `2,000 km` fiber path and signal speed `2 × 10^8 m/s`:

```text
Distance = 2,000,000 m
Delay = 2,000,000 / 200,000,000
      = 0.01 seconds
      = 10 milliseconds
```

Propagation delay depends on distance and signal speed, not packet size.

### 8. TCP/UDP Choice

- File download needs reliable ordered data, so TCP is a natural choice.
- Live voice values low delay and may accept some loss, so UDP is often useful.
- The final choice also depends on the application protocol and its own reliability rules.

### 9. What Happens When Opening a Website?

1. The browser checks caches and resolves the domain through DNS.
2. The host checks whether the destination is local or needs a gateway.
3. ARP or IPv6 Neighbor Discovery finds the next-hop local address.
4. The client creates a TCP connection or another supported transport.
5. TLS verifies identity and creates secure keys for HTTPS.
6. The browser sends an HTTP request.
7. Routers forward packets using destination prefixes.
8. The server returns content, and the browser processes it.

### 10. Basic Network Diagnosis

If a host cannot open `example.com`:

1. Check link/Wi-Fi state.
2. Check IP address, mask, and gateway.
3. Ping the local gateway if ICMP is allowed.
4. Test a known remote IP address.
5. Query DNS for `example.com`.
6. Test port `443` or use `curl`.
7. Check firewall, route, proxy, and service logs.

### Additional Practice

1. Divide `172.16.10.0/24` into four equal subnets.
2. Create VLSM ranges for 100, 50, 20, and 10 hosts.
3. Summarize `192.168.8.0/24` through `192.168.11.0/24`.
4. Calculate usable hosts in `/20`, `/28`, and `/30`.
5. Draw the full packet path between two VLANs.
6. Compare TCP and UDP headers.
7. Explain how DNS caching changes a second website visit.
8. Read a simple packet capture and identify handshake packets.

---

## 27. Common Mistakes and Interview Tips

### Concept Mistakes

- Saying the internet and World Wide Web are the same thing.
- Treating bandwidth and speed/latency as the same value.
- Saying a switch always works only at one layer in every modern design.
- Confusing MAC addresses with routable internet addresses.
- Saying ARP finds the MAC address of a remote internet server.
- Treating a VLAN as the same thing as an IP subnet.
- Using old classful rules instead of the given CIDR prefix.
- Forgetting that IPv6 has no broadcast address.
- Saying NAT is a firewall.
- Confusing routing with packet forwarding.
- Saying TCP sends application messages rather than a byte stream.
- Saying UDP is always faster for every application.
- Confusing TCP flow control with congestion control.
- Saying HTTPS hides every part of communication, including destination IP.
- Treating a failed ping as proof that a server is offline.

### Subnetting Mistakes

- Forgetting to convert the prefix into host bits.
- Using the host address as the network address.
- Forgetting the traditional network and broadcast addresses.
- Calculating the block size in the wrong octet.
- Mixing total addresses with usable hosts.
- Forgetting special `/31` point-to-point behavior.
- Combining networks that are not continuous or correctly aligned.

### Interview Tips

- Start with a one-line definition.
- Draw layers and packet flow when explaining communication.
- State whether you mean IPv4 or IPv6.
- Show subnet steps instead of giving only the answer.
- Explain both purpose and trade-off for TCP, UDP, NAT, and routing.
- Use “normally” for default ports because ports can be changed.
- Troubleshoot from local physical access toward the remote application.
- Say when a feature depends on the device, provider, or protocol version.

---

## 28. Rapid-Revision Cheat Sheet

### Layer Recall

```text
Application  → User network services
Transport    → TCP/UDP and ports
Network      → IP and routing
Data Link    → Frames, MAC, switches
Physical     → Bits and signals
```

### Address Recall

| Address | Main Use |
|---|---|
| Domain name | Human-friendly service name |
| Port | Application process |
| IP address | Routing between networks |
| MAC address | Delivery on a local link |

### Core Comparisons

| Topic | Quick Difference |
|---|---|
| Hub vs. switch | Repeat everywhere vs. learned frame forwarding |
| Switch vs. router | Same Layer 2 network vs. different IP networks |
| TCP vs. UDP | Reliable byte stream vs. best-effort datagrams |
| MAC vs. IP | Local link vs. routed logical address |
| ARP vs. DNS | IPv4-to-MAC locally vs. name-to-record lookup |
| Private vs. public IP | Internal non-public route vs. global route |
| Flow vs. congestion control | Protect receiver vs. protect network |
| Static vs. dynamic route | Manual entry vs. protocol learning |
| Firewall vs. proxy | Traffic policy vs. request representative |
| VM vs. container | Guest kernel vs. shared host kernel |

### Private IPv4 Ranges

```text
10.0.0.0/8
172.16.0.0/12
192.168.0.0/16
```

### Subnet Formulas

```text
Host bits = 32 - Prefix
Total addresses = 2^(Host bits)
Traditional usable hosts = Total addresses - 2
Subnets from borrowed bits = 2^(Borrowed bits)
```

### Common Ports

```text
20/21 FTP     22 SSH       23 Telnet
25 SMTP       53 DNS       67/68 DHCP
80 HTTP       110 POP3     123 NTP
143 IMAP      443 HTTPS
```

### TCP Recall

```text
Setup: SYN → SYN-ACK → ACK
Reliable ordered byte stream
Sequence numbers + ACKs + retransmission
Flow control protects receiver
Congestion control protects network
```

### Troubleshooting Recall

```text
Link → Local IP → Gateway → Remote IP → DNS → Port → Application
```

### Thirty-Second Interview Answer

> A computer network connects devices through agreed protocols. Ethernet and Wi-Fi carry local frames, IP addresses and routes move packets between networks, TCP or UDP delivers data to application ports, and protocols such as DNS, DHCP, HTTP, and TLS provide user services, automatic settings, web communication, and security.

### Final Checklist

- Can I explain all OSI and TCP/IP layers?
- Can I compare hub, switch, router, firewall, and proxy?
- Can I find a network, broadcast, and host range?
- Can I explain ARP, DHCP, ICMP, NAT, and DNS?
- Can I compare static, distance-vector, link-state, and BGP routing?
- Can I explain the TCP handshake, reliability, and close?
- Can I compare TCP and UDP with real uses?
- Can I explain HTTP, HTTPS, DNS records, and common ports?
- Can I troubleshoot from the physical link to the application?
- Can I explain basic wireless, cloud, and network security ideas?

**Recommended revision order:** models and devices → IPv4/subnetting → ARP/DHCP/NAT → routing → TCP/UDP → DNS/HTTP → security → troubleshooting.
